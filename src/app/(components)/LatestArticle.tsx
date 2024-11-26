import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getlatestBlogs = () => {
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
    .filter(blog => blog.latest); // Filter posts where 'featured' is true
};

// type latestBlog = {
//     title: string;
//     description: string;
//     image: string;
//     link: string;
//   };

// const blogs: latestBlog[] = [
//     {
//     title: "The Backbone of the Digital World",
//     description:
//       "Web development involves building and maintaining websites and web applications, focusing on both frontend and backend technologies.",
//     image: "/tech-image6.jpg",
//     link: "https://nextjs-website-tailwindcss-milestone2.vercel.app/",
//     },
//     {
//     title: "The Future of Technology",
//     description:
//       "AI and machine learning enable machines to simulate human intelligence and learn from data, transforming industries like healthcare and finance.",
//     image: "/tech-image1.jpg",
//     link: "https://nextjs-website-tailwindcss-milestone2.vercel.app/",
//     },
// ]

const LatestArticle = () => {
  const latestArticles = getlatestBlogs()
  return (
    <div className='bg-gray-200 py-8 w-full md:w-10/12'>
      <div className='mt-4 mb-8'>
        <h1 className='text-[#2C3E50] font-roboto text-center font-bold text-[2rem] sm:text-3xl md:text-4xl'>Latest Blog Posts</h1>
      </div>
      <div className='flex flex-col items-center justify-center md:flex-row gap-18 lg:gap-0'>{latestArticles.map((article, index)=> (
        <div className='space-y-7 sm:w-[35rem] sm:h-[500px] md:h-[31rem] md:w-[27rem] md:pr-1 lg:w-[30rem] lg:px-auto lg:py-auto lg:pr-4 overflow-hidden' key={index}>
            <div className='flex items-center justify-center'>
            <Image 
            src={article.image}
            alt={article.title}
            width={280}
            height={50}
            className='px-6 sm:w-[430px] md:w-[350px] lg:h-60 lg:w-96'
            />
            </div>
            <div className=' text-center space-y-4 md:pr-4'>
                <h2 className='text-[#2c3e50] font-roboto font-bold text-xl md:text-2xl  px-5'>{article.title}</h2>
                <p className='text-[#7f8c8d] font-roboto font-medium px-4'>{article.description}</p>
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

export default LatestArticle
