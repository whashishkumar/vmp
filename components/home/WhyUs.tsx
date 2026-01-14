import Image from 'next/image';
import Button from '../ui/Button';

const whyChooseUsData = {
  cards: [
    { title: 'AI-powered automation', icon: '/icons/Vector1.png' },
    { title: 'Centralized pet & data', icon: '/icons/Vector2.png' },
    { title: 'Faster, smarter decision-making', icon: '/icons/Vector3.png' },
    { title: 'Scalable for growing practices', icon: '/icons/Group2.png' },
    { title: 'Secure and compliant systems', icon: '/icons/Group44.png' },
    { title: 'Seamless system integration', icon: '/icons/Group45.png' },
  ],
  cta: {
    title: 'Trusted Pet Care Is Just Call Away',
    desc: 'One call connects you to dedicated veterinarians to keeping your pets healthy, happy, and safe.',
    phone: '+1 (424) 332-3268',
    button: 'Contact Us',
    image: '/images/whyCat.png',
  },
};

export default function WhyChooseUsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="inner-wrapper mx-auto px-4">
        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* FEATURE CARDS */}
          {whyChooseUsData.cards.map((item, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-2xl p-6
                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                border border-gray-100
                min-h-[160px]
                flex flex-col justify-between
              `}
            >
              <h4 className="font-medium text-gray-900">{item.title}</h4>
              <div className="mt-4 h-px bg-gray-100" />
              <div className=" text-3xl">
                <Image src={item.icon} alt="icon" height={40} width={40} />
              </div>
            </div>
          ))}

          {/* CTA CARD */}
          <div className="lg:col-span-2 bg-green-900 rounded-2xl p-6 text-white relative overflow-hidden flex items-center">
            <div className="max-w-[60%]">
              <h3 className="text-lg font-semibold mb-3">{whyChooseUsData.cta.title}</h3>
              <p className="text-sm text-green-100 mb-4">{whyChooseUsData.cta.desc}</p>
              <p className="font-semibold mb-6">Call Us At: {whyChooseUsData.cta.phone}</p>
              <Button label={whyChooseUsData.cta.button} />
            </div>
            {/* IMAGE */}
            <div className="absolute bottom-0 right-4 w-40">
              <Image
                src={whyChooseUsData.cta.image}
                alt="Pets"
                width={211}
                height={210}
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
