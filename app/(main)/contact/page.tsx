import InnerBanner from '@/components/common/InnerBanner'
import React from 'react'

const  bannerInfo = {
  bgImage:'images/bg.jpg',
  title:'Contact us Page'
}
export default function page() {
  return (
    <>
      <InnerBanner bannerInfo={bannerInfo}/>
    </>
  )
}
