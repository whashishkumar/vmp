import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import Image from 'next/image';

export default function AboutBanner() {
  return (
    <div className="inner-wrapper m-auto px-6 lg:px-0 py-12 md:py-0 bg-white">
      <div className="grid  grid-cols-1 md:grid-cols-[70%_28%] gap-[2%] items-center">
        <SectionHeading
          cssClass="text-left"
          title="About VMP"
          subTitle="VMP is the parent ecosystem behind Nurovet, VMP Marketing, VMP Finance, and VMP Insurance. Together, these solutions help veterinary clinics and hospitals manage operations, grow their practice, offer affordable care, and protect pets—through one connected ecosystem."
          subHeadingCss="!text-xl !text-black leading-relaxed"
      />
        <Image src={'/images/parrot-big.webp'} height={90} width={250} alt='parrot' className='w-full h-full object-cover' />
      </div>
    </div>
  );
}
