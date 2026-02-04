import Blogs from '@/components/Blog/Blogs';
import InnerBanner from '@/components/common/InnerBanner';


const bannerInfo = {
  bgImage: '/images/bg.jpg',
  title: 'Blog Page',
};

export default function page() {
  return (
    <>
      <InnerBanner bannerInfo={bannerInfo} />
      <Blogs/>
    </>
  );
}
