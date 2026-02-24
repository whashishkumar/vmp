'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection({ data }: any) {
  const { badge, title, desc, ctas, image } = data;

  return (
    <section className="relative overflow-hidden bg-color py-16">
      <div className="inner-wrapper mx-auto px-6 lg:px-0 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6">
            ✓ {badge}
          </div>
          <h1 className="text-[3rem] lg:text-[4rem] leading-[1.05] font-extrabold text-[#0f172a] mb-6 ">
            {title}
          </h1>
          <p className="text-[#5b6776] text-lg leading-relaxed  mb-10">{desc}</p>
          <div className="flex flex-wrap gap-5">
            {ctas?.map((btn: any, i: number) => (
              <Link
                key={i}
                href={btn.href}
                className={
                  btn.variant === 'primary'
                    ? 'px-8 py-4 rounded-full bg-linear-to-r from-[#1f9d84] to-[#0e7490] text-white font-semibold shadow-lg hover:scale-[1.03] transition'
                    : 'px-8 py-4 rounded-full border-2 border-[#86d6b6] text-[#1f7a5a] font-semibold bg-white/40 backdrop-blur hover:bg-white transition'
                }
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-105 h-65 rounded-2xl ">
            <Image src={image} alt="illustration" fill className="object-cover rounded-[15px] w-full " />
          </div>
          <div className="absolute -bottom-10 w-90 h-17.5 bg-[#cfeee0] rounded-full blur-2xl opacity-60"></div>
        </div>
      </div>
    </section>
  );
}
