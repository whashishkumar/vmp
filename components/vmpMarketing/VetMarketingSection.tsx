import Image from 'next/image';
import { FaSearch, FaBullhorn, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  FaSearch: FaSearch,
  FaBullhorn: FaBullhorn,
  FaCheckCircle: FaCheckCircle,
  FaMapMarkerAlt: FaMapMarkerAlt,
};

export default function VetMarketingSection({ marketingData }: any) {
  return (
    <section className="relative overflow-hidden py-16 bg-color ">
      <div className="wrapper m-auto px-6 lg:px-0 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2  rounded-full text-sm font-semibold  onest">
            {marketingData.tag}
          </div>
          <SectionHeading
            title={marketingData.title}
            subTitle={marketingData.description}
            cssClass={'text-left py-4 '}
          />
          {/* Features */}
          <div className="space-y-4">
            {marketingData.features.map((f: any, i: number) => {
              const Icon = iconMap[f.icon as keyof typeof iconMap];
              return (
                <div
                  key={i}
                  className="flex items-center justify-between border border-black/5 shadow-sm rounded-xl p-5 "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center bg-[#034c2a]/80`}
                    >
                      {Icon && <Icon className="text-white" size={22} />}
                    </div>
                    <div>
                      <div className="font-semibold bicroLage text-black">{f.title}</div>
                      <div className="text-slate-500 text-sm">{f.text}</div>
                    </div>
                  </div>
                  <div className="font-semibold text-[#00522C]">{f.stat}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <Image
            src={marketingData.image}
            alt="Marketing dashboard"
            width={720}
            height={620}
            className="w-full h-auto object-cover drop-shadow-2xl rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
