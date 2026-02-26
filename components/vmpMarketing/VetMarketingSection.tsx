import Image from 'next/image';
import { FaSearch, FaBullhorn, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading';

export default function VetMarketingSection({ marketingData }: any) {
  return (
    <section className="relative overflow-hidden py-16 bg-color ">
      <div className="wrapper m-auto px-6 lg:px-0 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2  rounded-full text-sm font-semibold  onest">
            {marketingData.badge}
          </div>
          <SectionHeading
            title={marketingData.title1}
            subTitle={marketingData.desc}
            cssClass={'text-left py-4 '}
          />
          {/* Features */}
          <div className="space-y-4">
            {marketingData.features.map((f: any, i: number) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="flex items-center justify-between border border-black/5 shadow-sm rounded-xl p-5 "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${f.color}`}
                    >
                      <Icon />
                    </div>
                    <div>
                      <div className="font-semibold bicroLage text-black">{f.title}</div>
                      <div className="text-slate-500 text-sm">{f.desc}</div>
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
