import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';

const themeStyles: any = {
  green: {
    card: 'bg-gradient-to-b from-emerald-50 to-emerald-100/40',
    headerIcon: 'bg-emerald-600 text-white',
    itemIcon: 'bg-emerald-500/10 text-emerald-600',
  },
  orange: {
    card: 'bg-gradient-to-b from-orange-50 to-orange-100/40',
    headerIcon: 'bg-orange-500 text-white',
    itemIcon: 'bg-orange-500/10 text-orange-600',
  },
};

export default function BenefitsSection({ data }: any) {
  return (
    <section className="py-16 bg-white">
      <div className="wrapper m-auto px-6 lg:px-0">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
            {data.tag}
          </div>
          <SectionHeading
            title={data.title}
            subTitle={data.description}
            cssClass="max-w-4xl mx-auto"
          />
        </div>

        {/* Columns */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {data.columns.map((col: any, i: number) => {
            const themeKeys = Object.keys(themeStyles);
            const theme = themeStyles[themeKeys[i % themeKeys.length]];
            return (
              <div key={i} className={`rounded-3xl p-8 ${theme.card}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center `}>
                    <Image
                      src={col.icon}
                      alt={col.title}
                      width={60}
                      height={60}
                      className="rounded-full object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-black bicroLage">{col.title}</h3>
                </div>
                <div className="space-y-4">
                  {col.items.map((item: any, idx: number) => {
                    return (
                      <div key={idx} className="flex items-start gap-4 bg-white/70 rounded-2xl p-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center `}>
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={50}
                            height={50}
                            className="rounded-full object-contain"
                          />
                        </div>

                        <div>
                          <h4 className="font-semibold text-black bicroLage">{item.title}</h4>
                          <p className="text-slate-600 text-sm">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
