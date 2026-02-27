import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';

import { FaNotesMedical, FaPills, FaFlask, FaCalendarAlt } from 'react-icons/fa';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  FaNotesMedical,
  FaPills,
  FaFlask,
  FaCalendarAlt,
};
export function MedicalRecordsSection({ medicalData }: any) {
  return (
    <section className="py-16 bg-white">
      <div className="wrapper m-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-120 lg:h-140">
          <Image
            src={medicalData?.image}
            alt="Medical records app"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold  onest">
            {medicalData.tag}
          </div>

          <SectionHeading
            title={medicalData.tag}
            subTitle={medicalData.desc}
            cssClass={'text-left py-4'}
          />

          <div className="space-y-4">
            {medicalData.features.map((item: any, i: number) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-[#00522C]/10 text-white flex items-center justify-center`}
                  >
                    {Icon && <Icon className="text-[#00522C]/80" size={26} />}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
