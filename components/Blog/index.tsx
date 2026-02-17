import React from 'react';
import BlogCard from './BlogCard';
import Link from 'next/link';
const blogDummy = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80',
    date: 'June 20, 2022',
    comments: 1,
    author: 'admin',
    title: 'Manage operations, data, and workflows from one ecosystem.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80',
    date: 'June 20, 2022',
    comments: 1,
    author: 'admin',
    title: 'Manage operations, data, and workflows from one ecosystem.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80',
    date: 'June 20, 2022',
    comments: 1,
    author: 'admin',
    title: 'Manage operations, data, and workflows from one ecosystem.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80',
    date: 'June 20, 2022',
    comments: 1,
    author: 'admin',
    title: 'Manage operations, data, and workflows from one ecosystem.',
  },
];

const InsightsHeader = ({ headerData }: any) => {
  const { button, description, heading } = headerData || {};
  const data = {
    heading: 'Insights, Updates, and Innovations from the VMP Ecosystem',
    description:
      'Stay updated on milestones and activities. Recent events show our dedication to growth and creativity.',
    button: {
      label: 'Learn More',
    },
  };

  return (
    <div className="w-full bg-white  mb-16 ">
      <div className="inner-wrapper mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-[2.5rem] font-medium text-[#1a1a1a] leading-[1.4]">
            <span className="relative inline-block">{heading || data.heading}</span>
          </h2>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-black text-base md:text-base md:text-left">
            {description || data.description}
          </p>
          <Link
            href={`${button.href}`}
            className="bg-[#00522C] hover:bg-[#00522C]/80 text-white px-12 py-3 rounded-full font-medium transition-all min-w-45 text-base"
          >
            {button.label || data.button.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function BlogsSection({ blogs }: any) {
  const blogData = blogs;

  return (
    <div className="inner-wrapper m-auto py-16 lg:px-0 px-6">
      <InsightsHeader headerData={blogData} />
      <BlogCard blogs={blogData} />
    </div>
  );
}
