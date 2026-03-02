import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';

import { FaChartBar, FaPaw, FaPen, FaPlus } from 'react-icons/fa';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  FaChartBar,
  FaPaw,
  FaPen,
  FaPlus,
};

export function PetManagementSection({ petMgmtData }: any) {
  return (
    <section className="py-16 bg-white">
      <div className="wrapper m-auto px-6  grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <Image
            src={petMgmtData?.image}
            alt="Veterinary website"
            width={700}
            height={520}
            className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
            priority
          />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-2 onest">
            {petMgmtData.tag}
          </div>
          <div className="items-left text-left flex ">
            <SectionHeading
              title={petMgmtData.title}
              titleCss={'text-left'}
              subTitle={petMgmtData.description}
              subHeadingCss={'text-left '}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {petMgmtData.features.map((f: any, i: number) => {
              const Icon = iconMap[f.icon as keyof typeof iconMap];

              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#00522C]/10`}
                  >
                   {Icon && <Icon size={26} className="text-[#00522C]/80" />}
                  </div>
                  <h4 className="font-semibold text-black mb-1 bicroLage">{f.title}</h4>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
