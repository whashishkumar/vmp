import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { CommonPageEndPoints } from '@/lib/services/CommonEndPoints'
import React from 'react'

export default async function layout({ children }: any) {
  const navBarResp = await CommonPageEndPoints.navBar()
  return (
    <>
      <Navbar navBarData={navBarResp} />
      {children}
      <Footer />
    </>
  )
}
