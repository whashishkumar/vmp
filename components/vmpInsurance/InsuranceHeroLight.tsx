import Image from 'next/image';
import Link from 'next/link';
import { FiShield, FiUsers, FiCheck } from 'react-icons/fi';

export default function InsuranceHeroLight({ data }: any) {
  const { primary, secondary } = data?.buttons || {};

  return (
    <section className="relative overflow-hidden py-16 bg-color">
      <div className="wrapper m-auto text-center">
        <div className="w-18 h-18 m-auto mb-6 rounded-2xl bg-white flex items-center justify-center shadow">
          <Image
            src={data.image}
            alt={data.title}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-black max-w-4xl mx-auto leading-tight onest">
          {data.title}
        </h1>
        <p className="mt-6 text-lg text-slate-600  m-auto onest">{data.description}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 onest">
          <Link
            href={primary?.href}
            className="px-8 py-3 rounded-full bg-[#00522C] text-white font-normal flex items-center gap-2 shadow hover:scale-[1.03] transition"
          >
            <FiShield />
            {primary?.label}
          </Link>
          <Link
            href={secondary.href}
            className="px-8 py-3 rounded-full border border-slate-300 text-slate-700 font-normal flex items-center gap-2 hover:bg-slate-50 transition"
          >
            <FiUsers />
            {secondary?.label}
          </Link>
        </div>
        <div className="mt-14 border-t border-slate-200 pt-8" />
        <div className="flex flex-wrap justify-center gap-8 text-slate-600">
          {data.stats.map((s: any, i: number) => (
            <div key={i} className="flex items-center gap-2 bicroLage">
              <FiCheck className="text-emerald-500" />
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
