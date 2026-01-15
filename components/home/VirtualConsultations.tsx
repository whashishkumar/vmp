import React from 'react';
import { LuCheck } from 'react-icons/lu';

const VirtualConsultations = () => {
  const data = {
    heading: {
      highlight: 'Virtual Consultations',
      title: 'for Smarter and More Accessible Veterinary Care',
      description:
        'Enable secure, AI-assisted online consultations to connect veterinarians and pet owners anytime, anywhere.',
    },
    checklist: [
      'Secure video and chat consultations',
      'AI-assisted symptom assessment',
      'Digital prescriptions and notes',
      'Integrated medical records and follow-ups',
      'Compliance-ready and data secure',
    ],
    buttons: [
      {
        label: 'Start Virtual Consultations',
        type: 'primary',
      },
      {
        label: 'Book a Demo',
        type: 'secondary',
      },
    ],
    image: {
      src: '/images/virtual.jpg',
      alt: 'Person video calling their dog',
    },
  };

  return (
    <section className="bg-color">
      <div className="inner-wrapper mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:px-0 px-6">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl  font-medium lg:text-[2.5rem] leading-tight">
              <span className=" px-2 rounded-sm">{data.heading.highlight}</span>
              {data.heading.title}
            </h2>

            <p className="text-lg text-black leading-relaxed l">{data.heading.description}</p>
          </div>
          {/* Checklist */}
          <ul className="space-y-4">
            {data.checklist.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-black font-medium text-lg">
                <LuCheck className="text-[#0a5c36] stroke-[3px]" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {data.buttons.map((btn, index) =>
              btn.type === 'primary' ? (
                <button
                  key={index}
                  className="bg-[#00522C] hover:bg-[#00522C]/80 transition-all text-white px-8 py-4 rounded-full font-medium  text-base cursor-pointer"
                >
                  {btn.label}
                </button>
              ) : (
                <button
                  key={index}
                  className="text-base border border-[#00522C] text-[#00522C] px-10 py-4 rounded-full font-medium hover:bg-[#00522C]/80 hover:text-white transition-all bg-transparent cursor-pointer"
                >
                  {btn.label}
                </button>
              )
            )}
          </div>
        </div>
        {/* Right Image */}
        <div className="relative">
          <div className="rounded-[40px] overflow-hidden shadow-xl">
            <img
              src={data.image.src}
              alt={data.image.alt}
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualConsultations;
