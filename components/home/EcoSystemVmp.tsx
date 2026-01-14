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
        'AI-powered veterinary software to streamline operations, enhance clinical decisions, and improve patient care',
      image: '/icons/span_.svg',
    },
    {
      title: 'VMP Marketing',
      description:
        'Data-driven marketing and digital solutions to increase visibility, appointments, and long-term practice growth',
      image: '/icons/span2_.svg',
    },
    {
      title: 'VMP Finance',
      description:
        'Care-focused financing solutions that help veterinarians offer treatments with faster approvals and flexibility',
      image: '/icons/span2_.svg',
    },
    {
      title: 'VMP Insurance',
      description:
        'Smart pet insurance plans designed to protect pets, reduce costs, and support lifelong care',
      image: '/icons/span_.svg',
    },
    {
      title: 'VMP Merchant',
      description: 'Secure and seamless payment solutions tailored for veterinary practices',
      image: '/icons/span_.svg',
    },
  ],
};

export default function VMPEcosystem() {
  return (
    <section className="bg-color py-20">
      <div className="inner-wrapper mx-auto px-4 grid gap-6 lg:grid-cols-3">
        {/* LEFT BIG CARD */}
        <div
          className="relative overflow-hidden rounded-3xl p-10 flex items-center min-h-[300px] bg-cover bg-center"
          style={{ backgroundImage: `url('/images/cardImg.jpg')` }}
        >
          {/* The Text Content */}
          <h2 className="relative z-10 text-white text-[2.625rem] font-semibold leading-snug">
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
                  className="object-cover"
                />
              </div>

              <h3 className="text-[1.375rem] font-normal text-[#122B45] mb-3">{item.title}</h3>

              <p className="text-[0.875rem] text-[#122B45] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            <div className="mt-6 ">
              <FaArrowRightLong />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
