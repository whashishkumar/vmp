import Link from 'next/link';
import SectionHeading from '../common/SectionHeading';
import { FaMobileAlt, FaBolt, FaClipboardList, FaCalendarCheck, FaChartBar } from 'react-icons/fa';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  FaMobileAlt,
  FaBolt,
  FaClipboardList,
  FaCalendarCheck,
  FaChartBar,
};

export function WhyLoveSection({ whyLoveData }: any) {
  return (
    <section className="py-24 bg-color">
      <div className="inner-wrapper m-auto px-6 lg:px-0">
        <div className="text-center mb-14">
          <SectionHeading title={whyLoveData.title} subTitle={whyLoveData.description} />
        </div>
        {/* Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {whyLoveData.features.map((f: any, i: number) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap];
            return (
              <div
                key={i}
                className="bg-white border border-[#E6F4EC] rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#00522C]/80 flex items-center justify-center shadow-md">
                  {Icon && <Icon className="text-white " size={24} />}
                </div>

                <div className="font-semibold text-[#0B1B33]">{f.title}</div>
                <div className="text-[#5B6B7A] text-sm">{f.desc}</div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="rounded-4xl bg-[#00522C]/90 p-10 lg:p-14 text-center shadow-xl">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            {whyLoveData.cta.title}
          </h3>

          <p className="text-white/90 max-w-2xl mx-auto mb-8">{whyLoveData.cta.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {whyLoveData.cta.buttons.map((btn: any, i: number) => {
              const base =
                'inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-full transition';

              const variants = {
                light: 'bg-white text-[#00522C] hover:bg-[#E6F4EC]',
                outline: 'border border-white/40 text-white hover:bg-white/10',
              };

              return (
                <Link
                  href={btn.href}
                  key={i}
                  className={`${base} ${variants[btn.variant as keyof typeof variants]}`}
                >
                  {btn.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
