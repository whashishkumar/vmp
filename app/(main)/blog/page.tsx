import Blogs from '@/components/Blog/Blogs';
import InnerBanner from '@/components/common/InnerBanner';
import { BlogPageEndPoints } from '@/lib/services/BlogPageEndPoints';

const bannerInfo = {
  bgImage: '/images/bg.jpg',
  title: 'Blog Page',
};

export default async function page() {
  const blogResp = await BlogPageEndPoints.getBlogPage();
  const category = await BlogPageEndPoints.getCategories();
  const recentPostsData = await BlogPageEndPoints.getRecentPosts();
  //  const tags = await BlogPageEndPoints.getTags();

  // console.log(category, 'category');

  return (
    <>
      <InnerBanner bannerInfo={bannerInfo} />
      <Blogs blogResp={blogResp} />
    </>
  );
}
