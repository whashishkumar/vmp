import Link from 'next/link';
import { FiCalendar, FiZap } from 'react-icons/fi';

export default function VetCtaStats({ data }: any) {
  const { primary, secondary } = data?.buttons || {};

  return (
    <section className="relative overflow-hidden py-16  text-center bg-color px-6 lg:px-0">
      <div className="relative wrapper mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {data?.stats?.map((s: any, i: number) => (
            <div key={i} className="rounded-2xl px-8 py-6 bg-white shadow bicroLage">
              <p className="text-4xl font-semibold">{s.value}</p>
              <p className="text-slate-400 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
          <span className="w-2 h-2 bg-teal-400 rounded-full " />
          {data.badge}
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl m-auto onest py-4 ">
          {data.title}
        </h2>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl m-auto onest">{data.description}</p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href={primary.href}
            className="px-8 py-3 flex items-center gap-2 rounded-full font-normal shadow-sm bg-white text-[#006039] cursor-pointer"
          >
            <FiCalendar />
            {primary.label}
          </Link>
          <Link
            href={secondary.href}
            className="px-8 py-4 rounded-full border border-white text-white bg-[#006039] flex items-center gap-2 "
          >
            <FiZap />
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
