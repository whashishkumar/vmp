import Image from 'next/image';
import Link from 'next/link';
import { FiZap, FiShield, FiClock, FiCheckCircle, FiUsers, FiArrowRight } from 'react-icons/fi';

const iconMap: any = {
  FiShield,
  FiClock,
  FiCheckCircle,
  FiUsers,
};

export default function FinalCTA({ data }: any) {
  const { primary, secondary } = data.buttons || {};

  return (
    <section className="relative overflow-hidden py-16 text-center bg-color px-6 lg:px-0">
      <div className="relative wrapper mx-auto max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
          <FiZap />
          {data.badge}
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight onest">{data.title}</h2>
        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">{data.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={primary.href}
            className="px-8 py-4 rounded-full font-normal shadow-sm  bg-white text-[#006039] cursor-pointer flex items-center gap-2 "
          >
            {primary.label}
            <FiArrowRight />
          </Link>
          <Link
            href={secondary.href}
            className="px-8 py-4 rounded-full font-normal shadow-sm  bg-[#006039] text-white cursor-pointer flex items-center gap-2 "
          >
            {' '}
            {secondary.label}
          </Link>
        </div>
        <div className="mt-10 h-px bg-white/10" />
        <div className="mt-6 flex flex-wrap justify-center gap-8 text-black">
          {data.points.map((p: any, i: number) => {
            return (
              <div key={i} className="flex items-center gap-2">
                <Image src={p.icon} alt={p.text} width={24} height={24} />
                <span>{p.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
