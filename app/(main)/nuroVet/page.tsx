import InnerBanner from '@/components/common/InnerBanner'
import React from 'react'


const bannerInfo = {
  bgImage: 'images/eycoSystembg.jpg',
  title: 'Nuro Vet'
}
export default function page() {
  return (
    <div>
      <InnerBanner bannerInfo={bannerInfo} className='bg-color' />
    </div>
  )
}
