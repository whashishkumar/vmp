import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Image from 'next/image';

export default function Address() {
  return (
    <div>
      <SectionHeading
        title="Have a questions? Contact us now"
        subTitle="Our service allows you to hide your geolocation, bypass blocking and protect your data. Join over 150 thousand people who trust up to keep their life safe."
        cssClass="text-left mb-10"
      />
      <Image
        src="/images/contactus.png"
        height={220}
        width={550}
        alt="banner"
        className="shadow-[0_16px_0px_-1px_#0a3f2a] rounded-3xl object-cover w-full h-full hidden md:block"
      />
    </div>
  );
}
