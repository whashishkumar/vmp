import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';

export default function ClinicalCasesSection({ data }: any) {
  return (
    <section className="bg-white">
      <div className="wrapper m-auto grid md:grid-cols-2 gap-12 items-center py-16 px-6 lg:px-0 ">
        <div className="relative w-full max-w-163.5 mx-auto overflow-hidden rounded-2xl bg-gray-50/50 border border-gray-100 shadow-sm">
          {data.image && (
            <Image
              src={data.image}
              alt="Partner Network Illustration"
              width={654}
              height={505}
              className="w-full h-auto object-cover transition-all duration-500 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 654px"
              priority
            />
          )}
        </div>
        {/* RIGHT CONTENT */}
        <div>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium mb-4 onest">
              {data.tag}
            </div>
            <SectionHeading
              title={data.title}
              subTitle={data?.description}
              cssClass={'text-left'}
            />
          </div>

          <div className="mt-4 space-y-4 ">
            {data?.points?.map((p: any, i: number) => (
              <div key={i} className="flex gap-4 shadow-sm p-6 rounded-xl bg-white">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center `}>
                  {p.icon && (
                    <Image
                      src={p.icon}
                      alt={p.title}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  )}
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
