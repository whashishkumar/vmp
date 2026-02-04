import BlogsSection from '@/components/Blog';
import BlogCard from '@/components/Blog/BlogCard';
import InnerBanner from '@/components/common/InnerBanner';
import React from 'react';

const bannerInfo = {
  bgImage: 'images/bg.jpg',
  title: 'Blog Page',
};
export default function page() {
  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} />
      <div className='py-16'>
        <BlogCard />
      </div>
    </div>
  );
}
