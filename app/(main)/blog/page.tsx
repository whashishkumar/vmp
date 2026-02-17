import Blogs from '@/components/Blog/Blogs';
import InnerBanner from '@/components/common/InnerBanner';
import { BlogPageEndPoints } from '@/lib/services/BlogPageEndPoints';

const bannerInfo = {
  bgImage: '/images/bg.jpg',
  title: 'Blog Page',
};

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageStr } = await searchParams;
  const page = Math.max(1, parseInt(pageStr || '1', 10) || 1);

  const blogResp = await BlogPageEndPoints.getBlogPage(page, 8);
  const category = await BlogPageEndPoints.getCategories();
  const recentPostsData = await BlogPageEndPoints.getRecentPosts();

  return (
    <>
      <InnerBanner bannerInfo={bannerInfo} />
      <Blogs
        blogResp={blogResp}
        recentPostsData={recentPostsData}
        categoriesData={category}
      />
    </>
  );
}
