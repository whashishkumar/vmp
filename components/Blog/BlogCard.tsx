'use client';
import React from 'react';
import Link from 'next/link';
import { LuMoveRight } from 'react-icons/lu';

const BlogCard = ({ blogs }: any) => {
  const { articles, data } = blogs || {};
  const articlesData = articles || blogs || data || [];
  const dateParts = (d: string) => {
    if (!d) return ['', ''];
    const split = String(d).split(',');
    return [split[0] || '', split[1]?.trim() || ''];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 inner-wrapper mx-auto">
      {articlesData?.map((post: any) => {
        const [dateMonth, dateYear] = dateParts(post?.date);
        return (
          <div
            key={post.id}
            className="bg-[#fff] overflow-hidden flex flex-col group cursor-pointer rounded-[15px] shadow-[0_0_14px_#d6d6d6]"
          >
            <div className="relative h-64 w-full">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
              )}
              <div className="absolute bottom-0 right-0 bg-[#0a4d2e] text-white px-5 py-3 text-center min-w-[100px] group-hover:scale-105">
                <p className="font-bold leading-tight">
                  {dateMonth}
                  <br />
                  <span className="text-white/40 font-normal">{dateYear}</span>
                </p>
              </div>
            </div>
            <div className="p-4 pt-10 space-y-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <span>{post.comments ?? 0} Comments</span>
                <span className="text-[#0a4d2e] text-xl">•</span>
                <span>by: {post.author || 'VMP Vet'}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#121212] leading-tight transition-colors group-hover:text-[#0a4d2e]">
                {post.title}
              </h3>
              <div className="pt-6">
                <Link
                  href={post.slug ? `/blog/${post.slug}` : '#'}
                  className="flex items-center gap-3 text-[#9F9F9F] font-bold tracking-widest text-xs uppercase group-hover:text-[#0a4d2e] transition-all"
                >
                  Read More
                  <LuMoveRight size={16} />
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
