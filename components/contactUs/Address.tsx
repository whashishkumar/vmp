import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Image from 'next/image';

// This could also be imported from a separate .json file
// const addressData = {
//   heading: {
//     title: 'Have a questions? Contact us now',
//     subTitle:
//       'Our service allows you to hide your geolocation, bypass blocking and protect your data. Join over 150 thousand people who trust up to keep their life safe.',
//     cssClass: 'text-left mb-10',
//   },
//   banner: {
//     src: '/images/contactus.png?v=2',
//     alt: 'banner',
//   },
// };

export default function Address({ addressData }: any) {
  const { heading, banner } = addressData;

  return (
    <div>
      <SectionHeading
        title={heading.title}
        subTitle={heading.subTitle}
        cssClass="text-left mb-10"
      />
      <Image src={banner.src} width={550} height={220} alt={banner.alt} />
    </div>
  );
}
