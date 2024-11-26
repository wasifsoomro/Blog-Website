import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified } from 'unified'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import CommentSection from "@/app/(components)/CommentSection"


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src',`posts/${slug}.md`)

  if(!fs.existsSync(filePath)){
    notFound()
    return null
  }
  const fileContent = fs.readFileSync(filePath, "utf-8")
  const {data, content } = matter(fileContent)

  if (!data.title || !data.date) {
    throw new Error("Invalid frontmatter: title and date are required.");
  }

  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)
  .use(rehypeAutolinkHeadings)
  .use(rehypeSlug)
  

  const htmlContent = (await processor.process(content)).toString()

  return (
    <div className=" max-w-4xl mx-auto p-4" >
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-lg mb-2 italic">&quot;{data.description}&quot;</p>
      <div className="flex gap-2">
      <p className="text-sm  mb-4 italic">{data.author}</p>
      <p className="text-sm mb-4">{data.date}</p>
      </div>
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert">
    </div>
     <CommentSection />
    </div>
    
  )
}
