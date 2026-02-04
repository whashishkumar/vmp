import AboutVMP from '@/components/common/AboutVmp'
import InnerBanner from '@/components/common/InnerBanner'

const  bannerInfo = {
  bgImage:'images/bg.jpg',
  title:'About us Page'
}

export default function page() {
  return (
    <>
      <InnerBanner bannerInfo={bannerInfo}/>
      <AboutVMP />
    </>
  )
}
