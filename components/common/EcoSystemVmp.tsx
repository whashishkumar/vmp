import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

// data/vmpEcosystem.js
export const vmpEcosystemData = {
  introCard: {
    title: 'The Complete VMP Ecosystem for Veterinary Growth',
  },
  cards: [
    {
      title: 'Nurovet',
      description:
        'Veterinary Management system powered by AI',
        image: '/images/why1.jpg',
    },
        {
      title: 'Nurovet App',
      description:
        'Mobile App for Pet Parents',
       image: '/images/why1.jpg',
    },
    {
      title: 'VMP Marketing',
      description:
        'Marketing and IT Development',
      image: '/images/why4.jpg',
    },
        {
      title: 'VMP Insurance',
      description:
        'VMP Insurance and Investment',
      image: '/images/why2.jpg',
    },
    {
      title: 'VMP Finance',
      description:
        'VMP Finance and Merchant Service',
      image: '/images/why3.jpg',
    },

    {
      title: 'Nuro Ai Doctor',
      description: 'AI Boat For Doctors',
       image: '/icons/span_.svg',
    },
      {
      title: 'Nuro Ai Student',
      description: 'AI Boat For Students',
      image: '/icons/span_.svg',
    },
  ],
};

export default function VMPEcosystem() {
  return (
    <section className="bg-color py-20">
      <div className="inner-wrapper mx-auto px-4 grid gap-6 md:grid-cols-3">
        {/* LEFT BIG CARD */}
        <div
          className="relative overflow-hidden rounded-3xl p-10 flex items-center min-h-[300px] bg-cover bg-center"
          style={{ backgroundImage: `url('/images/cardImg.jpg')` }}
        >
          <h2 className="relative  text-white text-[2.625rem] font-semibold leading-snug">
            {vmpEcosystemData.introCard.title}
          </h2>
        </div>

        {/* RIGHT CARDS */}
        {vmpEcosystemData.cards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[300px] hover:shadow-lg transition"
          >
            <div>
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="text-[1.375rem] font-normal text-[#122B45] mb-3">{item.title}</h3>

              <p className="text-[0.875rem] text-[#122B45] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            <div className="mt-2 ">
              <FaArrowRightLong />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
