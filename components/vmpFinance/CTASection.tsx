import Image from 'next/image';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';
import SectionHeading from '../common/SectionHeading';

export default function CTASection({ data }: any) {
  const { partner, started } = data?.buttons || {};
  return (
    <section className="relative overflow-hidden py-20 px-6 lg:px-0">
      <div className="absolute inset-0 bg-linear-to-r from-[#003d21] via-[#00522C] to-[#0a7a46]" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />
      <div className="relative wrapper mx-auto text-center text-white">
        <div className="flex justify-center mb-6">
          <Image
            src={data.image}
            alt="Family and pet"
            width={180}
            height={180}
            className="w-54 h-auto"
          />
        </div>
        <SectionHeading
          title={data.title}
          subTitle={data.description}
          cssClass="max-w-4xl mx-auto "
          titleCss="!text-white"
          subHeadingCss="!text-white/90"
        />
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={partner.href}
            className="px-8 py-3 rounded-full bg-white text-emerald-700 font-normal shadow hover:scale-[1.02] transition"
          >
            {partner.label}
          </Link>
          <Link
            href={started.href}
            className="px-8 py-3 rounded-full border border-white/80 text-white font-normal hover:bg-white/10 transition"
          >
            {started.label}
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90 bicroLage">
          {data.points.map((p: string, i: number) => (
            <div key={i} className="flex items-center gap-2">
              <FiCheck className="text-white" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
