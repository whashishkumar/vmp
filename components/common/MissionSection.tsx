'use client';

import Image from 'next/image';
import { FaPaw, FaUserMd, FaClinicMedical, FaLightbulb } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const missionData = [
  {
    id: 1,
    title: 'Accessible Pet Care',
    subtitle: 'Care Anywhere, Anytime',
    description:
      'Providing easy access to professional veterinary services through digital platforms and local networks.',
    icon: 'FaPaw',
  },
  {
    id: 2,
    title: 'Trusted Professionals',
    subtitle: 'Verified & Experienced Vets',
    description:
      'Connecting pet owners with certified and independent veterinarians for reliable and compassionate care.',
    icon: 'FaUserMd',
  },
  {
    id: 3,
    title: 'Healthy Communities',
    subtitle: 'Stronger Pet Ecosystem',
    description:
      'Building partnerships with hospitals, shelters, and clinics to create a supportive and sustainable pet care network.',
    icon: 'FaClinicMedical',
  },
  {
    id: 4,
    title: 'Innovation in Care',
    subtitle: 'Technology-Driven Solutions',
    description:
      'Using modern tools and telemedicine to enhance the quality and reach of veterinary services worldwide.',
    icon: 'FaLightbulb',
  },
];

const iconMap: any = {
  FaPaw: FaPaw,
  FaUserMd: FaUserMd,
  FaClinicMedical: FaClinicMedical,
  FaLightbulb: FaLightbulb,
};

export default function MissionSection({ missionData }: any) {
  const { heading, subheading, data } = missionData || {};

  return (
    <section className="py-14 bg-[#fdfaf6]">
      <div className="inner-wrapper mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <SectionHeading
            title={heading}
            subTitle="Driving innovation, trust, and accessibility in veterinary care for healthier pets and happier owners."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data?.map((item: any) => {
            const Icon = typeof item.icon === 'string' && item.icon.startsWith('http') ? null : iconMap[item.icon];
            const iconUrl = typeof item.icon === 'string' && item.icon.startsWith('http') ? item.icon : null;
            return (
              <div
                key={item.id}
                className="group bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-700 group-hover:bg-green-700 group-hover:text-white transition">
                    {iconUrl ? (
                      <Image src={iconUrl} alt={item.title} width={40} height={40} className="object-contain" />
                    ) : Icon ? (
                      <Icon size={24} />
                    ) : null}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black group-hover:text-green-700 transition">
                  {item.title}
                </h3>
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
