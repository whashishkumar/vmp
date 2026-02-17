import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import SectionHeading from './SectionHeading';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function VMPEcosystem({ vmpEcosystemData }: any) {
  const { introCard, cards, title, subTitle } = vmpEcosystemData || {};

  return (
    <section className="bg-color py-14">
      <div className="inner-wrapper mx-auto">
        {title && (
          <div className="items-left text-left flex py-4">
            <SectionHeading
              title={title}
              titleCss={'!text-3xl text-left mb-2'}
              subTitle={subTitle}
            />
          </div>
        )}

        <div className="px-4 lg:px-0 grid gap-6 md:grid-cols-3">
          {/* LEFT BIG CARD */}
          {introCard && (
            <div
              className="relative overflow-hidden rounded-3xl py-4  px-6 flex items-center min-h-[200px] bg-cover bg-center"
              style={{ backgroundImage: `url('/images/cardImg.jpg')` }}
            >
              <h2 className="relative  text-white text-[1.9rem] font-semibold leading-snug">
                {introCard?.title}
              </h2>
            </div>
          )}

          {/* RIGHT CARDS */}
          {cards?.map((item: any, index: any) => (
            <div
              key={index}
              className="bg-white rounded-3xl py-4  px-6 flex flex-col justify-between min-h-[200px] hover:shadow-lg transition"
            >
              <div>
                <div className="h-20  mb-3 ">
                  <Image
                    src={item?.icon || item.image}
                    alt={item?.title}
                    width={124}
                    height={70}
                    className="object-contain  h-full"
                  />
                </div>
                <h3 className="text-[1.375rem] font-normal text-[#122B45] mb-3">{item?.title}</h3>
                <p className="text-[0.875rem] text-[#122B45] leading-relaxed font-normal">
                  {item?.description}
                </p>
              </div>

              <div className="mt-6 ">
                <Link href={`${item.link}`}>
                  {/* <FaArrowRightLong size={14} className="text-[#122B45]" />
                   */}
                  <IoIosArrowRoundForward size={24} className="text-black" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
