import InnerBanner from '@/components/common/InnerBanner'
import ContactUs from '@/components/contactUs'
import React from 'react'

const  bannerInfo = {
  bgImage:'images/contactUsbanner.jpg',
  title:'Contact us Page'
}
export default function page() {
  return (
    <>
      <InnerBanner bannerInfo={bannerInfo} className='bg-color'/>
      <ContactUs/>
    </>
  )
}
