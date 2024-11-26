import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getBlogs = () => {
  const contentPath = path.join(process.cwd(), 'src', 'posts');
  const files = fs.readdirSync(contentPath, 'utf-8');
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const fileContent = fs.readFileSync(path.join(contentPath, file), 'utf-8');
      const { data } = matter(fileContent); // Extract front matter data
      return data;
    });
    
};




const Page = () => {
  const blogs = getBlogs();
  return (
    <div className="bg-[#f9f9f9] mx-auto p-4">
      <h1 className="text-3xl text-[#34495e] mb-8 mt-16 font-bold text-center">Blog Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {blogs.map((blog, index) => (
          <div key={index} className="  shadow-md rounded-lg overflow-hidden hover:scale-105">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl text-[#2c3e50] font-semibold mb-2 ">{blog.title}</h2>
              <p className=" mb-4 text-[#495455]">{blog.description}</p>
              <p className="text-sm  mb-2 text-[#bdc3c7]">By {blog.author} on {blog.date}</p>
              <div className='flex items-center justify-center'>
              <button className='bg-[#3498db] hover:bg-[#2980b9] py-2 px-6 rounded '>
              <Link href={`/blogpost/${blog.slug}`}>Read More</Link>
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
