import InnerBanner from '@/components/common/InnerBanner'
import VMPEcosystem from '@/components/common/EcoSystemVmp'
import FAQ from '@/components/home/FAQ'

const  bannerInfo = {
  bgImage:'images/bg.jpg',
  title:'Services Page'
}

export default function page() {
  return (
    <>
    <InnerBanner bannerInfo={bannerInfo} className='bg-color'/>
     <VMPEcosystem />
      <FAQ />
    </>
  )
}
