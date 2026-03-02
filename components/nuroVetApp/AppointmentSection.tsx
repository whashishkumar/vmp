import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';
import { Key } from 'react';
import { FaHospital, FaVideo, FaPhone, FaComments, FaCheck } from 'react-icons/fa';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  FaHospital,
  FaVideo,
  FaPhone,
  FaComments,
};

export function AppointmentSection({ appointmentData }: any) {
  return (
    <section className="py-16 bg-color">
      <div className="wrapper m-auto px-6  grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
            {appointmentData.tag}
          </div>
          <SectionHeading
            title={appointmentData.title}
            subTitle={appointmentData.description}
            cssClass="text-left py-4"
          />
          <div className="flex flex-wrap gap-3 mb-8">
            {appointmentData.features.map((o: any, i: number) => {
              const Icon = iconMap[o.icon as keyof typeof iconMap];

              return (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-700"
                >
                  {Icon && <Icon className="text-gray-500" />} {o.title}
                </div>
              );
            })}
          </div>
          <div className="space-y-4">
            {appointmentData.points.map((p: any, i: Key | null | undefined) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00522C] text-white flex items-center justify-center">
                  <FaCheck size={12} />
                </div>
                <div className="text-gray-700">{p}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full h-120 lg:h-140">
          <Image
            src={appointmentData.image}
            alt="Appointment app"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
