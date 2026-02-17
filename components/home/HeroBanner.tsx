'use client';

import Image from 'next/image';
import { FiPlay } from 'react-icons/fi';
import Button from '../ui/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// const heroData = {
//   badge: {
//     icon: '🐾',
//     text: 'Your trusted partner in pet wellness',
//   },
//   title: 'One Ecosystem Powering Smarter Veterinary Care and Practice Growth',
//   description:
//     'Technology, growth, financial support, and insurance solutions built exclusively for modern veterinary practices.',
//   primaryCTA: {
//     label: 'Get Started',
//     href: '#',
//   },
//   secondaryCTA: {
//     label: 'Watch Our Video',
//     href: '#',
//   },
//   trustSection: {
//     text: 'We proudly serve pet owners who trust us to provide reliable care, quality products.',
//     avatars: [
//       { id: 1, src: '/images/Border.svg' },
//       { id: 2, src: '/images/Border.svg' },
//       { id: 3, src: '/images/Border.svg' },
//       { id: 4, src: '/images/Border.svg' },
//     ],
//   },
//   images: {
//     background: '/images/bg.jpg',
//     mainCharacter: '/images/banner01.png',
//   },
// };

export default function HeroBanner({ heorBannerData }: any) {
  const router = useRouter();
  const { badge, title, description, primaryCTA, secondaryCTA, trustSection, images } =
    heorBannerData || {};

  return (
    <>
      <div className="m-auto p-6 relative">
        <section
          style={{ backgroundImage: `url('${images.background}')` }}
          className="h-full z-10 bg-cover bg-no-repeat overflow-hidden rounded-[1.3125rem] relative"
        >
          {/* <div className="absolute inset-0 bg-[#00522C]/80 rounded-[1.3125rem]" /> */}

          <div className="relative inner-wrapper m-auto grid h-full grid-cols-1 md:grid-cols-2 px-6 lg:px-0 ">
            <div className="flex flex-col justify-center h-full md:py-20 text-white my-20 gap-2 ">
              <div className="mb-8 flex items-center gap-2 text-sm md:text-base bicroLage font-semibold">
                <Image
                  src={badge.icon}
                  height={18}
                  width={18}
                  alt="icon"
                  className="object-contain"
                />
                <span className="uppercase tracking-wide  text-sm md:text-base font-semibold">
                  {badge.text}
                </span>
              </div>
              <h1 className="mb-4 lg:mb-8 text-[1.5rem] md:text-[3.563rem] md:leading-17.5 font-bold onest">
                {title}
              </h1>

              <p className="mb-4 md:mb-12 text-base md:text-xl font-bold sm:text-lg onest">
                {description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pb-2 md:pb-6  ">
                <Button
                  label={primaryCTA.label}
                  className="px-4 py-2 text-[#00522C]"
                  onClick={() => router.push(`${primaryCTA.href}`)}
                />
                <button className="flex items-center gap-3 text-lg transition-opacity hover:opacity-80 font-bold bicroLage">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E94E4E]">
                    <FiPlay className="fill-current text-white" />
                  </span>
                  {secondaryCTA.label}
                </button>
              </div>

              {/* <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {trustSection.avatars.map((avatar: any) => (
                    <div
                      key={avatar.id}
                      className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#1E6B4E]"
                    >
                      <Image src={avatar.src} alt="User avatar" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="max-w-sm  text-sm md:text-lg bicroLage">{trustSection.text}</p>
              </div> */}
            </div>

            {/* RIGHT CONTENT — bottom aligned */}
            <div className="relative flex h-full items-end justify-end">
              <div className="relative hidden md:block self-end">
                <Image
                  src={images.mainCharacter}
                  alt="Veterinary Professional"
                  width={753}
                  height={590}
                  priority
                  className="w-[800px] lg:w-[950px]  h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
