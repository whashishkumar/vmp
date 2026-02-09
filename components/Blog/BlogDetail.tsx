import React from 'react';
import SideBar from './SideBar';
import Image from "next/image";


const myPost = {
  title: "My Journey into React",
  author: "Jane Doe",
  date: "Oct 24, 2025",
  image: "/images/aboutbg.jpg",
  content: "<p>Hello world!</p>"
};

const BlogDetailCard = ({ data }: any) => {
  const content = data?.content;
  return (
    <article className="bg-white mx-auto px-6 lg:px-0 w-full">
      <div className="pb-8">
        <a
          href="/blog"
          className="inline-flex items-center gap-2 text-[#0a5e3b] font-medium hover:opacity-80 transition"
        >
          ← Back to Blog
        </a>
      </div>
      <div className="relative w-full h-[320px] overflow-hidden rounded-sm">
        {data?.image ? (
          <Image
            src={data.image}
            alt={data?.title || "article"}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
        <span>By {data?.author || "Unknown author"}</span>
        <span>•</span>
        <span>{data?.date || "Unknown date"}</span>
        <span>•</span>
        <span>{data?.comments ?? 0} Comments</span>
      </div>

      <h1 className="mt-4 text-4xl font-bold text-black leading-tight">
        {data?.title}
      </h1>
      <div className="mt-8">
        <div
          className="
            prose prose-lg max-w-none
            prose-p:text-gray-600
            prose-p:leading-relaxed
            prose-h4:text-black
            prose-h4:font-semibold
            prose-ul:list-disc
            prose-li:ml-5
            prose-blockquote:border-l-4
            prose-blockquote:border-gray-300
            prose-blockquote:pl-6
            prose-blockquote:italic
            prose-blockquote:rounded-lg
            prose-blockquote:py-4
            prose-blockquote:px-6
            prose-img:rounded-xl
            prose-img:shadow-md
          "
          dangerouslySetInnerHTML={{ __html: content || "" }}
        />
      </div>
    </article>
  );
};

export default function BlogDetail() {
  return (
    <div className="wrapper m-auto">
      <div className="grid grid-cols-1 md:grid-cols-[78%_20%] gap-[2%]">
       <BlogDetailCard data={myPost} />
        <SideBar />
      </div>
    </div>
  );
}
