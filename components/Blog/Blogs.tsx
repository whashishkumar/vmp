'use client';
import React, { useState } from 'react';
import { MdFilterList, MdClose } from 'react-icons/md';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import SideBar from './SideBar';

export default function Blogs({ blogResp, recentPostsData, categoriesData, tags }: any) {
  const meta = blogResp?.meta || {};
  const currentPage = meta.current_page ?? 1;
  const lastPage = meta.last_page ?? 1;
  const [blogs] = useState<any[]>(blogResp?.data ?? []);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="wrapper m-auto">
      {/* Mobile Filter Button */}
      <div className="md:hidden flex justify-end px-6 py-4">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#0a4d2e] text-white rounded-lg hover:bg-[#0a4d2e] transition-colors"
          aria-label="Open filters"
        >
          <MdFilterList size={20} />
          <span>Filters</span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 md:hidden transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b z-10">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close drawer"
          >
            <MdClose size={24} />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-60px)] p-4 ">
          <SideBar
            recentPostsData={recentPostsData}
            categoriesData={categoriesData}
            tags={tags}
            onItemClick={() => setIsDrawerOpen(false)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[70%_28%] lg:grid-cols-[78%_20%] gap-[2%] px-6 lg:px-0 py-12">
        <div>
          {blogs?.length > 0 ? (
            <>
              <BlogCard blogs={blogs} />
              <Pagination currentPage={currentPage} lastPage={lastPage} />
            </>
          ) : null}
        </div>
        <div className="relative">
          <div className="sticky top-30 hidden md:block">
            <SideBar
              recentPostsData={recentPostsData}
              categoriesData={categoriesData}
              tags={tags}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
