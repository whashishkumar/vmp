import Image from 'next/image';
import React from 'react';

export default function VmpEcosystemWork() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="
      absolute inset-0
      bg-[url('/images/eycoSystembg.jpg')]
      bg-cover
      bg-center
      bg-no-repeat
    "
      />
      <div className="absolute inset-0 bg-[#00522CE3]" />
      {/* Content */}
      <section className="inner-wrapper m-auto relative z-10  py-16  px-14 lg:px-0">
        <div className="flex justify-center items-center ">
          <Image
            src={'/images/works.png'}
            height={779}
            width={1101}
            alt="bg"
            className="object-contain w-full h-full"
          />
        </div>
      </section>
    </div>
  );
}
