import Image from 'next/image';
import { FaCalendarAlt, FaHospital, FaVideo, FaPhone, FaComments, FaCheck } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading';
import SectionBadge from '../common/SectionBadge';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';



export function AppointmentSection({ appointmentData }: any) {
  return (
    <section className="py-16 bg-color">
      <div className="wrapper m-auto px-6 lg:px-0 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
            {appointmentData.tag}
          </div>
          <SectionHeading
            title={appointmentData.title}
            subTitle={appointmentData.desc}
            cssClass="text-left py-4"
          />
          <div className="flex flex-wrap gap-3 mb-8">
            {appointmentData.options.map((o: { icon: any; label: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, i: Key | null | undefined) => {
              const Icon = o.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-700"
                >
                  <Icon className="text-gray-500" /> {o.label}
                </div>
              );
            })}
          </div>
          <div className="space-y-4">
            {appointmentData.points.map((p: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
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
