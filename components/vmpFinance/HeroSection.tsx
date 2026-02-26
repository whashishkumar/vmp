'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({ data }: any) {
  const { badge, title, desc, ctas, image, description } = data || {};

  return (
    <section className="relative overflow-hidden bg-color py-16 px-6 lg:px-0 ">
      <div className="wrapper m-auto grid md:grid-cols-2 gap-12 items-center ">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
            ✓ {badge}
          </div>
          <h1 className="text-[2.8rem] md:text-[4rem] leading-[1.05] font-extrabold text-[#0f172a] mb-6 onest">
            {title}
          </h1>
          <p className="text-[#5b6776] text-lg leading-relaxed  mb-10 onest">
            {description || desc}
          </p>
          <div className="flex flex-wrap gap-5 items-center">
            {ctas?.map((btn: any, i: number) => (
              <Link
                key={i}
                href={btn.href}
                className={
                  btn.variant === 'primary'
                    ? 'px-8 py-4 rounded-full font-normal shadow-sm  bg-white text-[#006039] cursor-pointer'
                    : 'px-8 py-4 rounded-full border border-white text-white bg-[#006039]'
                }
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden">
            <Image src={image} alt="illustration" fill className="object-cover shadow-lg" />
          </div>
          <div className="absolute -bottom-10 w-90 h-17.5 bg-[#cfeee0] rounded-full blur-2xl opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
