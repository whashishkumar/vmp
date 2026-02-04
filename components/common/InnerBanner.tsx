import React from 'react';
import Navbar from '../layout/Navbar';
import BreadCrumbs from '@/components/ui/Breadcrumbs';

export default function InnerBanner({ bannerInfo, className }: any) {
  const { bgImage, title } = bannerInfo || {};

  return (
    <div className={`${className ? className : 'bg-white'}  p-4 sm:p-6 relative `}>
      <div
        className="relative w-full min-h-87.5 sm:min-h-100 md:min-h-112.5 rounded-[1.3125rem] overflow-hidden bg-no-repeat bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute w-full top-10 ">
          <Navbar />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#000]/50 via-[#000]/30 to-transparent" />

        {/* <div className={`absolute inset-0 bg-[#000]/50 `} /> */}
        <div className="relative z-20 grow flex items-center justify-center px-4 fredoka">
          <h1 className="text-white text-5xl sm:text-5xl md:text-6xl font-bold text-center drop-shadow-md mt-18">
            {title}
          </h1>
        </div>
        <div className="relative z-20 flex justify-center fredoka">
          <div
            className={`${className ? className : 'bg-white'}  px-20 sm:px-52 py-3 sm:py-4 rounded-t-[30px] flex items-center gap-2 text-sm sm:text-2xl font-semibold shadow-2xl`}
          >
            <BreadCrumbs />
          </div>
        </div>
      </div>
    </div>
  );
}
