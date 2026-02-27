'use client';
import React, { useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import SideBar from './SideBar';
import { BlogPageEndPoints } from '@/lib/services/BlogPageEndPoints';

export default function Blogs({ blogResp, recentPostsData, categoriesData, tags }: any) {
  const meta = blogResp?.meta || {};
  const currentPage = meta.current_page ?? 1;
  const lastPage = meta.last_page ?? 1;
  const [blogs, setBlogs] = useState<any[]>(blogResp?.data ?? []);

  const fetchCategoryBlogs = async (slug?: string) => {
    try {
      const res = await BlogPageEndPoints.getCategoriesFiltersByCategory(slug);
      setBlogs(res?.data ?? []);
    } catch (err) {
      console.error('failed to fetch category blogs', err);
    }
  };

  const fetchTagBlogs = async (slug?: string) => {
    try {
      const res = await BlogPageEndPoints.getTagsFiltersByTag(slug);
      setBlogs(res?.data ?? []);
    } catch (err) {
      console.error('failed to fetch tag blogs', err);
    }
  };

  return (
    <div className="wrapper m-auto">
      <div className="grid grid-cols-1 md:grid-cols-[70%_28%] lg:grid-cols-[78%_20%] gap-[2%] px-6 lg:px-0">
        <div>
          {blogs?.length > 0 ? (
            <>
              <BlogCard blogs={blogs} />
              <Pagination currentPage={currentPage} lastPage={lastPage} />
            </>
          ) : null}
        </div>
        <div className="relative">
          <div className="sticky top-30">
            <SideBar
              recentPostsData={recentPostsData}
              categoriesData={categoriesData}
              fetchCategoryBlogs={fetchCategoryBlogs}
              tags={tags}
              fetchTagBlogs={fetchTagBlogs}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
