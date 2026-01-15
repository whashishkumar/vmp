import Image from 'next/image';
import { SlCallOut } from 'react-icons/sl';

export const aboutVMPData = {
  badge: {
    title: 'More Than 1000+ Happy Pet Owners',
    icons: [
      { id: 1, src: '/images/Border.svg' },
      { id: 2, src: '/images/Border.svg' },
      { id: 3, src: '/images/Border.svg' },
      { id: 4, src: '/images/Border.svg' },
    ],
  },
  experience: {
    value: '10+',
    label: 'Years Of Experience',
  },
  heading: {
    tag: 'About VMP',
    title: 'A Unified Ecosystem Supporting Every Stage of Veterinary Practice Care and Growth',
    description:
      'VMP is the parent ecosystem behind Nurovet, VMP Marketing, VMP Finance, and VMP Insurance. Together, these solutions help veterinary clinics and hospitals manage operations, grow their practice, offer affordable care, and protect pets—through one connected ecosystem.',
  },
  features: [
    'Professional & Corporate',
    'Certified experts',
    'Growth & Innovation Focused',
    'Affordable prices',
  ],
  cta: {
    primary: 'Read More',
    phone: '+1 (424) 332-3268',
    label: 'Emergency call',
  },
  services: [
    {
      title: 'Veterinary Telemedicine',
      description: 'Healthy eating significantly boosts overall health and well-being',
      icon: '/icons/about-icon1.svg',
    },
    {
      title: 'Veterinary Hospitals',
      description: 'A balanced diet includes a variety of foods from all food groups',
      icon: '/icons/about-icon-2.svg',
    },
    {
      title: 'Independent Veterinarians',
      description: 'Complete Maintenance Services for Comfort and Peace of Mind',
      icon: '/icons/about-icon3.png',
    },
    {
      title: 'Pet-Friendly Atmosphere',
      description: 'Trusted Handyman Help for All Those Small but Important Home Tasks',
      icon: '/icons/about-icon4.svg',
    },
  ],
};

export default function AboutVMP() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="inner-wrapper m-auto px-4 lg:px-0 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative inline-block bicroLage ">
          <Image
            src="/images/vmpaboutsvg.svg"
            alt="Veterinary Care"
            width={520}
            height={520}
            className="rounded-4xl object-cover w-full "
          />
          {/* Top Badge managed via JSON */}
          <div
            className="
              absolute top-0 left-0
              bg-[#00522C] text-white
              p-6
              rounded-br-4xl rounded-tl-3xl
              w-60 h-35
              flex flex-col justify-center 
              border-r-16 border-b-16 border-[#FFFDF9]
            "
          >
            <div className="flex -space-x-2 mb-3">
              {aboutVMPData.badge.icons.map((icon) => (
                <Image
                  key={icon.id}
                  src={icon.src}
                  alt="user icon"
                  height={30}
                  width={30}
                  className="object-contain mb-2"
                />
              ))}
            </div>
            <p className="text-base font-semibold leading-tight">{aboutVMPData.badge.title}</p>
          </div>
          {/* Experience Badge managed via JSON */}
          <div
            className="
              absolute bottom-0 right-0
              bg-[#00522C] text-white
              p-6
              rounded-br-4xl rounded-tl-3xl
              w-40 h-40
              flex flex-col items-start justify-center text-center
              border-l-16 border-t-16 border-[#FFFDF9]
            "
          >
            <div>
              <p className="text-[1.5rem] lg:text-[2.5rem] font-bold">
                {aboutVMPData.experience.value}
              </p>
              <p className="text-base font-bold">{aboutVMPData.experience.label}</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-[#00522C] font-medium mb-3 text-[1.8rem]">
            {aboutVMPData.heading.tag}
          </p>
          <h2 className="text-[2rem] lg:text-[2.875rem] font-normal leading-tight mb-5 text-[#122B45]">
            {aboutVMPData.heading.title}
          </h2>
          <p className="text-[#000000B2] mb-6 text-base font-normal">
            {aboutVMPData.heading.description}
          </p>

          {/* Features managed via JSON */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {aboutVMPData.features.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-base text-[#122B45]">
                <span className="text-[#00522C]">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA managed via JSON */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#00522C] text-white px-8 text-base py-3 rounded-full font-medium hover:bg-[#00522C]/80 transition">
              {aboutVMPData.cta.primary}
            </button>
            <div className="text-sm flex items-center gap-3">
              <div className="h-12 w-12 rounded-full flex items-center border border-[#0000001A] justify-center">
                <SlCallOut size={16} />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-[#00000099] font-medium">{aboutVMPData.cta.label}</p>
                <p className="font-normal text-[#002C3F]">{aboutVMPData.cta.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid managed via JSON */}
      <div className="inner-wrapper mx-auto px-4 mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {aboutVMPData.services.map((service, index) => (
          <div key={index} className="text-left border-r border-[#0000001A] last:border-none px-6">
            <Image
              src={service.icon}
              alt={service.title}
              height={40}
              width={40}
              className="object-contain mb-2"
            />
            <h4 className="font-bold text-base my-2">{service.title}</h4>
            <p className="text-sm text-[#00000099] font-normal">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
