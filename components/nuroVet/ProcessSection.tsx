import Image from 'next/image';
import { FaMobileAlt, FaVideo, FaFileAlt, FaHeart, FaGreaterThan } from 'react-icons/fa';

const iconMap = {
  mobile: FaMobileAlt,
  video: FaVideo,
  file: FaFileAlt,
  heart: FaHeart,
};

export default function SimpleProcessSection({ processData }: any) {
  return (
    <section className="py-16 bg-white">
      <div className="wrapper m-auto px-6 lg:px-0 text-center">
        <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
          {processData.tag}
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 onest">
          {processData.title}
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-14 onest">{processData.description}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processData.steps.map((step: any, i: number) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <div
                key={step.id}
                className="relative bg-white border border-[#00522C]/10 rounded-2xl p-8 text-left hover:shadow-lg transition"
              >
                <div className="absolute top-4 right-4 bg-green-100 text-[#00522C] text-xs font-semibold w-7 h-7 flex items-center justify-center rounded-full">
                  {step.id}
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#00522C]/80 text-white shadow-md mb-5">
                  {/* <Icon size={20} /> */}
                  {/* <Image src={step.icon} alt={step.title} width={20} height={20} /> */}
                </div>
                <h3 className="font-semibold text-lg text-black mb-2 bicroLage">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

