import React from 'react';
import BlogCard from './BlogCard';
import SideBar from './SideBar';

const blogData = [
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
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80',
    date: 'June 20, 2022',
    comments: 1,
    author: 'admin',
    title: 'Manage operations, data, and workflows from one ecosystem.',
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80',
    date: 'June 20, 2022',
    comments: 1,
    author: 'admin',
    title: 'Manage operations, data, and workflows from one ecosystem.',
  },
  {
    id: 13,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80',
    date: 'June 20, 2022',
    comments: 1,
    author: 'admin',
    title: 'Manage operations, data, and workflows from one ecosystem.',
  },
  {
    id: 121,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80',
    date: 'June 20, 2022',
    comments: 1,
    author: 'admin',
    title: 'Manage operations, data, and workflows from one ecosystem.',
  },
  {
    id: 1311,
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80',
    date: 'June 20, 2022',
    comments: 1,
    author: 'admin',
    title: 'Manage operations, data, and workflows from one ecosystem.',
  },
];






export default function Blogs() {
  return (
    <div className="wrapper m-auto">
      <div className="grid grid-cols-1 md:grid-cols-[78%_20%] gap-[2%]">
        <BlogCard blogs={blogData} />
        <div className="relative">
          <div className="sticky top-30">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
