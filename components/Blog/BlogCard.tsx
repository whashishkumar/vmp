'use client';
import React from 'react';
import Link from 'next/link';
import { LuMoveRight } from 'react-icons/lu';

const BlogCard = ({ posts, blogs }: any) => {
  // Accept posts array directly from API, or fallback to blogs.data/articles for home page
  const articlesData = Array.isArray(posts) ? posts : (blogs?.data ?? blogs?.articles ?? []);
  const dateParts = (d: string) => {
    if (!d) return ['', ''];
    const split = String(d).split(',');
    return [split[0] || '', split[1]?.trim() || ''];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 inner-wrapper mx-auto">
      {articlesData?.map((post: any, index: number) => {
        const [dateMonth, dateYear] = dateParts(post?.date);
        const postSlug = post?.slug ?? '';

        return (
          <div
            key={post?.id ?? index}
            className="bg-[#fafafa] overflow-hidden flex flex-col group cursor-pointer shadow-sm rounded-sm"
          >
            <div className="relative h-64 w-full">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 right-0 bg-[#0a4d2e] text-white px-5 py-3 text-center min-w-[100px]">
                <p className="font-bold leading-tight">
                  {dateMonth}
                  <br />
                  <span className="text-white/40 font-normal">{dateYear}</span>
                </p>
              </div>
            </div>
            <div className="p-8 pt-10 space-y-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <span>{post.comments ?? 0} Comments</span>
                <span className="text-[#ff5c35] text-xl">•</span>
                <span>by: {post.author || 'VMP Vet'}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#121212] leading-tight transition-colors group-hover:text-[#0a4d2e]">
                {post.title}
              </h3>
              <div className="pt-6">
                <Link
                  href={postSlug ? `/blog/${postSlug}` : '#'}
                  className="flex items-center gap-3 text-[#9F9F9F] font-bold tracking-widest text-xs uppercase group-hover:text-[#0a4d2e] transition-all"
                >
                  Read More
                  <LuMoveRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
