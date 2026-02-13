'use client';
import React from 'react';
import Image from 'next/image';
import { FiCalendar } from 'react-icons/fi';

const categoriesData = [
  { id: 1, name: 'Teeth Cleaning', count: 3 },
  { id: 2, name: 'Pet grooming', count: 2 },
  { id: 3, name: 'Fluff & Brush', count: 2 },
  { id: 4, name: 'Face Trim', count: 2 },
  { id: 5, name: 'Bath & Spa', count: 3 },
];

const recentPostsData = [
  {
    id: 1,
    title: 'Understanding Pet Behavior',
    date: 'Jan 23, 2026',
    image: '/images/why1.jpg',
  },
  {
    id: 2,
    title: 'Understanding Dog Behavior for Better Communication',
    date: 'Jan 23, 2026',
    image: '/images/why1.jpg',
  },
  {
    id: 3,
    title: 'How to Look After Dogs Loved Ones Healthy Year-Round',
    date: 'Jan 23, 2026',
    image: '/images/why1.jpg',
  },
];

const CategoriesCard = () => {
  return (
    <div className="max-w-sm w-full bg-[#fdfaf6] rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-black mb-4">Categories</h2>
      <div className="h-px bg-gray-200 mb-2" />
      <div className="space-y-4">
        {categoriesData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between py-2 border-b border-gray-200 last:border-none"
          >
            <span className="text-gray-800 font-medium">{item.name}</span>

            <span className="text-gray-500 font-semibold">({item.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RecentPostsCard = () => {
  return (
    <div className="max-w-sm w-full bg-[#fdfaf6] rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-black mb-4">Recent Posts</h2>
      <div className="h-px bg-gray-200 mb-4" />
      <div className="space-y-5">
        {recentPostsData.map((post) => (
          <div
            key={post.id}
            className="flex items-start gap-4 cursor-pointer hover:opacity-80 transition"
          >
            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 font-semibold leading-snug line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-green-600 text-sm mt-1">
                <FiCalendar size={16} />
                <span className="text-gray-500">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function () {
  return (
    <div className="space-y-6 mb-12">
      <RecentPostsCard />
      <CategoriesCard />
    </div>
  );
}
