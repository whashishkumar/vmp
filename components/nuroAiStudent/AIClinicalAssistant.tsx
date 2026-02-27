import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';

const themeStyles: any = {
  teal: 'bg-teal-50 border-teal-100',
  purple: 'bg-purple-50 border-purple-100',
  pink: 'bg-pink-50 border-pink-100',
  green: 'bg-emerald-50 border-emerald-100',
};

export default function AIClinicalAssistant({ data }: any) {
  return (
    <section className="py-16 bg-color px-6 lg:px-0">
      <div className="wrapper mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 onest text-sm font-medium mb-4">
            {data.tag}
          </div>
          <SectionHeading title={data.title} subTitle={data.description} cssClass={'text-left'} />
          {/* feature cards */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {data?.points?.map((f: any, i: number) => {
              return (
                <div
                  key={i}
                  className={`rounded-2xl border border-black/5 p-5 shadow-md ${themeStyles[f.theme]}`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg text-white flex items-center justify-center mb-3`}
                  >
                    <Image src={f.icon} alt={f.title} width={64} height={64} className="" />
                  </div>
                  <p className="font-semibold text-black bicroLage">{f.title}</p>
                  <p className="text-sm text-slate-600">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT CHAT UI */}
        <div className="relative">
          <div className="relative w-full max-w-163.5 mx-auto overflow-hidden rounded-2xl shadow-sm">
            {data.image && (
              <Image
                src={data.image}
                alt="Partner Network Illustration"
                width={654}
                height={505}
                className="w-full h-auto object-contain transition-all duration-500 hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 654px"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
