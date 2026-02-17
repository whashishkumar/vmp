import BlogDetail from '@/components/Blog/BlogDetail';
import InnerBanner from '@/components/common/InnerBanner';
import { BlogPageEndPoints } from '@/lib/services/BlogPageEndPoints';
import { notFound } from 'next/navigation';

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let postData;
  try {
    postData = await BlogPageEndPoints.getPostBySlug(slug);
  } catch {
    notFound();
  }

  const [recentPostsData, categoriesData] = await Promise.all([
    BlogPageEndPoints.getRecentPosts(),
    BlogPageEndPoints.getCategories(),
  ]);

  const { post, bannerInfo } = postData || {};
  const banner = bannerInfo || { title: 'Blog Detail', bgImage: '/images/bg.jpg' };

  return (
    <div>
      <InnerBanner bannerInfo={banner} />
      <BlogDetail post={post} recentPostsData={recentPostsData} categoriesData={categoriesData} />
    </div>
  );
}
