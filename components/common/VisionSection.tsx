'use client';
import Image from 'next/image';
import { FaStethoscope, FaHospital, FaUserMd, FaPaw } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

// const visionData = [
//   {
//     id: 1,
//     title: 'Veterinary Telemedicine',
//     subtitle: 'Veterinary Telemedicine',
//     description: 'Healthy eating significantly boosts overall health and well-being',
//     icon: 'FaStethoscope',
//   },
//   {
//     id: 2,
//     title: 'Veterinary Hospitals',
//     subtitle: 'Veterinary Hospitals',
//     description: 'A balanced diet includes a variety of foods from all food groups',
//     icon: 'FaHospital',
//   },
//   {
//     id: 3,
//     title: 'Independent Veterinarians',
//     subtitle: 'Independent Veterinarians',
//     description: 'Complete Maintenance Services for Comfort and Peace of Mind',
//     icon: 'FaUserMd',
//   },
//   {
//     id: 4,
//     title: 'Pet-Friendly Atmosphere',
//     subtitle: 'Pet-Friendly Atmosphere',
//     description: 'Trusted Handyman Help for All Those Small but Important Home Tasks',
//     icon: 'FaPaw',
//   },
// ];

const iconMap: any = {
  FaStethoscope,
  FaHospital,
  FaUserMd,
  FaPaw,
};

export default function VisionSection({ visionData }: any) {
  const { heading, subheading, data } = visionData || {};

  return (
    <section className="py-14 bg-white">
      <div className="inner-wrapper mx-auto px-6 lg-px-0">
        <div className="mb-12 text-center">
          <SectionHeading title={heading} subTitle={subheading} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data?.map((item: any) => {
            const Icon =
              typeof item.icon === 'string' && item.icon.startsWith('http')
                ? null
                : iconMap[item.icon];
            const iconUrl =
              typeof item.icon === 'string' && item.icon.startsWith('http') ? item.icon : null;
            return (
              <div
                key={item.id}
                className="group bg-[#fdfaf6] p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#00522c]  group-hover:text-white transition">
                    {iconUrl ? (
                      <Image
                        src={iconUrl}
                        alt={item.title}
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    ) : Icon ? (
                      <Icon size={24} />
                    ) : null}
                  </div>
                </div>
                <h3 className="text-lg font-semibold   text-[#00522c] transition">{item.title}</h3>
                <p className="text-sm text-gray-800 font-medium mt-1">{item.subtitle}</p>
                <p className="text-gray-600 mt-4 leading-relaxed text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
