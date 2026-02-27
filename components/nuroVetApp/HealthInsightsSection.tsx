import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';

import { FaHeart, FaSyringe, FaChartLine, FaClipboardCheck } from 'react-icons/fa';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  FaHeart,
  FaSyringe,
  FaChartLine,
  FaClipboardCheck,
};
export function HealthInsightsSection({ healthData }: any) {
  return (
    <section className="py-16 bg-color">
      <div className="wrapper m-auto px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
            {healthData.tag}
          </div>

          <SectionHeading title={healthData.title} subTitle={healthData.description} />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {healthData.features.map((c: any, i: any) => {
              const Icon = iconMap[c.icon as keyof typeof iconMap];

              return (
                <div key={i} className={`${c.bg} rounded-2xl p-6 shadow-sm border border-black/5`}>
                  <div
                    className={`w-12 h-12 rounded-xl bg-[#00522C]/10 text-white flex items-center justify-center mb-4`}
                  >
                    {Icon && <Icon className="text-[#00522C]/80" size={26} />}
                  </div>
                  <h4 className="font-semibold text-black mb-1 bicroLage">{c.title}</h4>
                  <p className="text-sm text-gray-600">{c.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="relative w-full h-120 lg:h-140">
            <Image
              src={healthData?.image}
              alt="Health insights app"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
