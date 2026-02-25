import Image from 'next/image';
import { FiCheck, FiFileText } from 'react-icons/fi';

const pointColors: any = {
  teal: 'bg-teal-100 text-teal-600',
  purple: 'bg-purple-100 text-purple-600',
  cyan: 'bg-cyan-100 text-cyan-600',
  green: 'bg-emerald-100 text-emerald-600',
};

export default function ClinicalCasesSection({ data }: any) {
  return (
    <section className="py-16 ">
      <div className="wrapper mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative w-full max-w-[654px] mx-auto overflow-hidden rounded-2xl">
            <Image
              src={data.sectionImage}
              alt="Partner"
              width={654}
              height={505}
              className="w-full h-auto object-contain transition-opacity duration-300"
              sizes="(max-width: 768px) 100vw, 654px"
              priority
            />
          </div>
        </div>
        {/* RIGHT CONTENT */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium mb-4 onest">
            <FiFileText />
            {data.tag}
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-800 leading-tight onest">
            {data.title.normal}
            <span>{data.title.highlight}</span>
          </h2>
          <p className="mt-4 text-lg text-black max-w-xl onest">{data.description}</p>
          <div className="mt-8 space-y-5 ">
            {data.points.map((p: any, i: number) => (
              <div key={i} className="flex gap-4 shadow-sm p-6 rounded-xl bg-white">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${pointColors[p.color]}`}
                >
                  <FiCheck />
                </div>
                <div>
                  <p className="font-semibold text-black bicroLage">{p.title}</p>
                  <p className="text-slate-600 text-sm">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
