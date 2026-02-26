import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';

export default function FinancingSection({ data }: any) {
  return (
    <section className="py-16 bg-white">
      <div className="wrapper m-auto text-center px-6 lg:px-0">
        <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
          {data.tag}
        </div>
        <SectionHeading
          title={data.title}
          subTitle={data.description}
          cssClass="max-w-4xl mx-auto"
        />
        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center ">
          {data.features.map((item: any, i: number) => {
            return (
              <div
                key={i}
                className={`text-left rounded-2xl p-6 bg-linear-to-br shadow-sm border border-slate-100 min-h-62.5`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white `}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="object-contain "
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-black leading-snug bicroLage">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
