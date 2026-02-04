import BlogDetail from '@/components/Blog/BlogDetail'
import InnerBanner from '@/components/common/InnerBanner'

const bannerInfo = {
  bgImage: '/images/bg.jpg',
  title: 'Blog Detail Page',
};

export default function page() {
  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} />
      <BlogDetail/>
    </div>
  )
}
