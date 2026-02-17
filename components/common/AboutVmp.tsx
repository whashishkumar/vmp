import Image from 'next/image';
import Link from 'next/link';
import { SlCallOut } from 'react-icons/sl';

export default function AboutVMP({ aboutVMPData, hideTag }: { aboutVMPData: any; hideTag?: boolean }) {
  const { badge, experience, cta, bannerImage } = aboutVMPData || {};
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="inner-wrapper m-auto px-4 lg:px-0 grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT IMAGE */}
        <div className="relative inline-block bicroLage ">
          <div>
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[520px] hidden md:block">
              <Image
                src={bannerImage}
                alt="Veterinary Care"
                fill
                className="rounded-4xl object-cover w-full h-full "
              />
            </div>

            {experience && (
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
                  <p className="text-[1.5rem] lg:text-[2.5rem] font-bold">{experience?.value}</p>
                  <p className="text-base font-bold">{experience?.label}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          {!hideTag && aboutVMPData?.heading?.tag && (
            <p className="text-[#00522C] font-medium mb-3 text-[1.8rem]">
              {aboutVMPData.heading.tag}
            </p>
          )}
          <h2 className="text-[2rem] lg:text-[2.575rem] font-normal lg:leading-[58px] mb-5 text-[#122B45] ">
            {aboutVMPData.heading.title}
          </h2>
          <p className="text-[#000000B2] mb-6 text-base font-normal">
            {aboutVMPData.heading.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {aboutVMPData.features.map((item: any, index: number) => (
              <div key={index} className="flex items-center gap-2 text-base text-[#122B45]">
                <span className="text-[#00522C]">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`${cta?.primary.href}`}
              className="bg-[#00522C] text-white px-8 text-base py-3 rounded-full font-medium hover:bg-[#00522C]/80 transition"
            >
              {cta?.primary.label}
            </Link>
            <div className="text-sm flex items-center gap-3">
              <div className="h-12 w-12 rounded-full flex items-center border border-[#0000001A] justify-center">
                <SlCallOut size={16} />
              </div>
              <div className="flex flex-col justify-center">
                <Link href={`tel:${aboutVMPData?.cta.phone.href}`}>
                  <p className="text-[#00000099] font-medium">{aboutVMPData.cta.phone.label}</p>
                  <p className="font-normal text-[#002C3F]">{aboutVMPData.cta.phone.href}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner-wrapper mx-auto px-4 mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {aboutVMPData.services.map((service: any, index: number) => (
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
