'use client';

import Image from 'next/image';
import { FiPlay } from 'react-icons/fi';
import Navbar from '../layout/Navbar';
import Button from '../ui/Button';

// All data managed here
const heroData = {
  badge: {
    icon: '🐾',
    text: 'Your trusted partner in pet wellness',
  },
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
  trustSection: {
    text: 'We proudly serve pet owners who trust us to provide reliable care, quality products.',
    avatars: [
      { id: 1, src: '/images/Border.svg' },
      { id: 2, src: '/images/Border.svg' },
      { id: 3, src: '/images/Border.svg' },
      { id: 4, src: '/images/Border.svg' },
    ],
  },
  images: {
    background: '/images/bg.jpg',
    mainCharacter: '/images/banner01.png',
  },
};

export default function HeroBanner() {
  return (
    <>
      <div className="m-auto p-6 relative">
        <section
          // className="h-dvh z-10 sm:bg-[position:55%_43%] bg-[position:70%_45%] relative inset-0 bg-no-repeat overflow-hidden sm:bg-[length:135%] max-[640px]:bg-[length:250%] rounded-[1.3125rem]"
          style={{ backgroundImage: `url('${heroData.images.background}')` }}
          className='h-fit z-10 bg-cover bg-no-repeat overflow-hidden rounded-[1.3125rem] relative '
        >
          <div className="absolute inset-0 bg-[#00522C]/80 rounded-[1.3125rem]" />
          <div >
            <div className="relative inner-wrapper m-auto grid h-full grid-cols-1 items-center px-6 lg:px-0 md:grid-cols-2 pt-12 lg:pt-25   ">
              <div className="md:py-20 text-white my-15 md:my-0 ">
                <div className="mb-4 flex items-center gap-2 text-sm  md:text-base bicroLage font-semibold">
                  <span>{heroData.badge.icon}</span>
                  <span className="uppercase tracking-wide text-base font-semibold">{heroData.badge.text}</span>
                </div>
                <h1 className="mb-4lg:mb-6 text-[1.5rem] md:text-[3.563rem]  md:leading-17.5 font-bold onest">
                  {heroData.title}
                </h1>
                <p className="mb-4 md:mb-8 text-base md:text-xl font-bold sm:text-lg onest">
                  {heroData.description}
                </p>
                <div className="mb-10 flex flex-wrap items-center gap-6  md:pb-6">
                  <Button label={heroData.primaryCTA.label} className="px-4 py-2 text-[#00522C]" />
                  <button className="flex items-center gap-3 text-lg transition-opacity hover:opacity-80 font-bold bicroLage">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E94E4E]">
                      <FiPlay className="fill-current text-white" />
                    </span>
                    {heroData.secondaryCTA.label}
                  </button>
                </div>
                {/* Trust Section */}
                {/* <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {heroData.trustSection.avatars.map((avatar) => (
                      <div
                        key={avatar.id}
                        className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#1E6B4E]"
                      >
                        <Image src={avatar.src} alt="User avatar" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="max-w-sm  text-sm md:text-lg bicroLage">
                    {heroData.trustSection.text}
                  </p>
                </div> */}
              </div>

              {/* RIGHT CONTENT */}
              <div className="relative flex h-full items-end justify-center lg:justify-end ">
                <div className="relative hidden md:block ">
                  <Image
                    src={heroData.images.mainCharacter}
                    alt="Veterinary Professional"
                    width={730}
                    height={590}
                    priority
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
