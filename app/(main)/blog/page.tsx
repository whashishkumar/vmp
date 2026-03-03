import Blogs from '@/components/Blog/Blogs';
import InnerBanner from '@/components/common/InnerBanner';
import { BlogPageEndPoints } from '@/lib/services/BlogPageEndPoints';

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string; tag?: string }>;
}) {
  const { page: pageStr, category, tag } = await searchParams;
  const page = Math.max(1, parseInt(pageStr || '1', 10) || 1);

  let blogResp;

  // Fetch blogs based on filter (category or tag) or get all blogs
  if (category) {
    blogResp = await BlogPageEndPoints.getCategoriesFiltersByCategory(category);
  } else if (tag) {
    blogResp = await BlogPageEndPoints.getTagsFiltersByTag(tag);
  } else {
    blogResp = await BlogPageEndPoints.getBlogPage(page, 8);
  }

  const categoriesData = await BlogPageEndPoints.getCategories();
  const recentPostsData = await BlogPageEndPoints.getRecentPosts();
  const tagsData = await BlogPageEndPoints.getTags();
  const { hero } = blogResp || {};

  return (
    <>
      <InnerBanner bannerInfo={hero || { title: 'Blog ', bgImage: '/images/bg.jpg' }} />
      <Blogs
        blogResp={blogResp}
        recentPostsData={recentPostsData}
        categoriesData={categoriesData}
        tags={tagsData}
      />
    </>
  );
}
