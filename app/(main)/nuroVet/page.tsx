import InnerBanner from '@/components/common/InnerBanner'
import React from 'react'


const bannerInfo = {
  bgImage: 'images/eycoSystembg.jpg',
  title: 'NuroVet'
}
export default function page() {
  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} className='bg-color' />
    </div>
  )
}
