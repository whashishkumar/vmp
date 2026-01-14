'use client';

import Image from 'next/image';
import { FiArrowUpRight, FiPlay } from 'react-icons/fi';
import Navbar from '../layout/Navbar';
import Button from '../ui/Button';

const heroData = {
  badge: 'Your trusted partner in pet wellness',
  title: 'One Ecosystem Powering Smarter Veterinary Care and Practice Growth',
  description:
    'Technology, growth, financial support, and insurance solutions built exclusively for modern veterinary practices.',
  primaryCTA: {
    label: 'Get Started',
    href: '#',
  },
  secondaryCTA: {
    label: 'Watch Our Video',
    href: '#',
  },
  trustText: 'We proudly serve pet owners who trust us to provide reliable care, quality products.',
  avatars: ['/images/Border.svg', '/images/Border.svg', '/images/Border.svg', '/images/Border.svg'],
  images: {
    background: '/images/bg.jpg',
    mainCharacter: '/images/banner.png',
  },
};

export default function HeroBanner() {
  return (
    <div className="bg-color">
      <div className="m-auto p-6">
        <section
          className="relative min-h-dvh overflow-hidden bg-fill bg-top bg-no-repeat sm:rounded-[1.3125rem]"
          style={{ backgroundImage: `url('${heroData.images.background}')` }}
        >
          <div className="absolute inset-0 bg-[#1E6B4E]/75" />
          <div className="py-6 border-b border-2 border-[#fafafa]">
            <Navbar />
          </div>

          <div className="relative inner-wrapper m-auto grid h-full grid-cols-1 items-center  px-6 lg:px-0 md:grid-cols-2 ">
            {/* LEFT CONTENT */}
            <div className="z-10 md:py-20 text-white ">
              <div className="mb-4 flex items-center gap-2 text-base  bicroLage font-semibold">
                <span>🐾</span>
                <span className="uppercase tracking-wide">{heroData.badge}</span>
              </div>
              <h1 className="mb-6 text-[3.5rem] font-bold leading-17.5 ">{heroData.title}</h1>
              <p className="mb-8 text-xl font-bold  sm:text-lg">{heroData.description}</p>
              <div className="mb-10 flex flex-wrap items-center gap-6 border-b border-[#fafafa]/30 pb-6">
                <Button label={heroData.primaryCTA.label} className="px-4 py-2 text-[#00522C] " />
                <button className="flex items-center gap-3 text-lg transition-opacity hover:opacity-80 font-bold bicroLage">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E94E4E]">
                    <FiPlay className="fill-current text-white" />
                  </span>
                  {heroData.secondaryCTA.label}
                </button>
              </div>

              {/* Trust Section */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {heroData.avatars.map((src, index) => (
                    <div
                      key={index}
                      className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#1E6B4E]"
                    >
                      <Image src={src} alt="User avatar" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="max-w-sm text-lg bicroLage">{heroData.trustText}</p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative flex h-full items-end justify-center lg:justify-end">
              <div className="relative z-10">
                <Image
                  src={heroData.images.mainCharacter}
                  alt="Veterinary Professional"
                  width={730}
                  height={790}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
