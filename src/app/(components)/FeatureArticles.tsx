import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getfeaturedBlogs = () => {
  const contentPath = path.join(process.cwd(), 'src', 'posts');
  
  // Read all Markdown files in the content directory
  const files = fs.readdirSync(contentPath, 'utf-8');
  
  return files
    .filter(file => file.endsWith('.md')) // Ensure only Markdown files are processed
    .map(file => {
      const fileContent = fs.readFileSync(path.join(contentPath, file), 'utf-8');
      const { data } = matter(fileContent); // Extract front matter metadata
      return data;
    })
    .filter(blog => blog.featured); // Filter posts where 'featured' is true
};


function FeatureArticles() {
  const featuredArticles = getfeaturedBlogs();
  return (
    <div className='space-y-4 p-6 flex flex-col items-center justify-center md:w-10/12'>
         <div className="w-full max-w-[60rem] flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0 ">
        <div className="flex-1">
          <h1 className="text-[#2C3E50] font-roboto font-bold text-[2rem] md:text-4xl">
            Featured Articles
          </h1>
          <p className="text-[#7f8c8d] font-semibold font-roboto text-sm md:text-[1rem] lg:text-[22px] lg:pr-6 mt-6">
            The section will have a large, bold heading like &quot;Featured Articles&quot;
            or &quot;Editor&apaos;s Picks&quot; to make it stand out.
          </p>
        </div>
      </div>
      <div className='space-y-8 md:space-y-0 lg:space-y-16'>{featuredArticles.map((article, index)=>(
        <div className='flex flex-col items-center h-[430px] sm:h-[500px] w-[20rem] sm:w-[35rem] md:flex-row md:w-[40rem] md:h-[300px] md:pr-1 lg:w-[50rem] space-y-4 lg:pl-4' key = {index}>
        <Image
          alt={article.title}
          src={article.image}
          width={280}
          height={50}
          className='sm:w-[400px] md:h-72 md:w-[250px] lg:w-[380px] '
        />
        <div className='text-center md:mt-2 lg:mt-8 space-y-6 md:space-x-4'>
          <h2 className='text-[#2c3e50] font-bold font-roboto text-xl sm:text-[25px] md:text-[23px] lg:text-3xl text-wrap px-6 lg:px-0'>{article.title}</h2>
          <p className='text-[#7f8c8d] text-[16px] sm:text-[19px] px-5 '>
            {article.description}
          </p>
          <button className='bg-[#3498db] hover:bg-[#2980b9] py-2 px-6 rounded '>
              <Link href={`/blogpost/${article.slug}`}>Read More</Link>
              </button>
        </div>
     </div>
      ))}
      </div>
    </div>
  )
}

export default FeatureArticles
