import Footer from '@/components/layout/Footer'
import React from 'react'

export default function layout({children}:any) {
  return (
    <>
    {children}
    <Footer/>
    </>
  )
}
