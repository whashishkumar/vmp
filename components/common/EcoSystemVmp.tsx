import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import SectionHeading from './SectionHeading';

export default function VMPEcosystem({ vmpEcosystemData }: any) {
  return (
    <section className="bg-color py-14">
      <div
        className="inner-wrapper mx-auto"
      >
        {vmpEcosystemData?.title && ( 
         <div className='items-left text-left flex py-4'>
           <SectionHeading title={vmpEcosystemData?.title} titleCss={'!text-3xl text-left mb-2'}  subTitle={vmpEcosystemData?.subTitle}/>
          </div>
        )}

        <div className="px-4 lg:px-0 grid gap-6 md:grid-cols-3">
          {/* LEFT BIG CARD */}
          {vmpEcosystemData?.introCard && (
            <div
              className="relative overflow-hidden rounded-3xl py-4  px-6 flex items-center min-h-[200px] bg-cover bg-center"
              style={{ backgroundImage: `url('/images/cardImg.jpg')` }}
            >
              <h2 className="relative  text-white text-[1.9rem] font-semibold leading-snug">
                {vmpEcosystemData?.introCard?.title}
              </h2>
            </div>
          )}

          {/* RIGHT CARDS */}
          {vmpEcosystemData?.cards?.map((item: any, index: any) => (
            <div
              key={index}
              className="bg-white rounded-3xl py-4  px-6 flex flex-col justify-between min-h-[200px] hover:shadow-lg transition"
            >
              <div>
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                  <Image
                    src={item?.image}
                    alt={item?.title}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="text-[1.375rem] font-normal text-[#122B45] mb-3">{item?.title}</h3>

                <p className="text-[0.875rem] text-[#122B45] leading-relaxed font-normal">
                  {item?.description}
                </p>
              </div>

              <div className="mt-2 ">
                <FaArrowRightLong />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
