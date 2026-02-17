import InnerBanner from '@/components/common/InnerBanner';
import ContactUs from '@/components/contactUs';
import { ContactUsPageEndPoints } from '@/lib/services/ContactUsPageEndPoints';
import React from 'react';

const bannerInfo = {
  bgImage: 'images/contactUsbanner.jpg',
  title: 'Contact us Page',
};
export default async function page() {
  const resp = await ContactUsPageEndPoints.getContactUsPage();
  const { hero } = resp;

  return (
    <>
      <InnerBanner bannerInfo={hero} className="bg-color" />
      <ContactUs contactUsData={resp} />
    </>
  );
}
