import React from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import SideBar from './SideBar';

export default function Blogs({ blogResp, recentPostsData, categoriesData }: any) {
  const meta = blogResp?.meta || {};
  const currentPage = meta.current_page ?? 1;
  const lastPage = meta.last_page ?? 1;

  return (
    <div className="wrapper m-auto">
      <div className="grid grid-cols-1 md:grid-cols-[78%_20%] gap-[2%]">
        <div>
          <BlogCard posts={blogResp?.data ?? []} />
          <Pagination currentPage={currentPage} lastPage={lastPage} />
        </div>
        <div className="relative">
          <div className="sticky top-30">
            <SideBar recentPostsData={recentPostsData} categoriesData={categoriesData} />
          </div>
        </div>
      </div>
    </div>
  );
}
