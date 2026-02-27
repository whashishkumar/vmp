import Image from 'next/image';
import { FiHeart, FiShield, FiDollarSign, FiArrowRight, FiCheck } from 'react-icons/fi';

const iconMap: any = {
  FiHeart,
  FiShield,
  FiDollarSign,
};

export default function InsuranceSection({ data }: any) {
  return (
    <section className="relative overflow-hidden py-16  text-black px-6 lg:px-0 ">
      <div className="relative inner-wrapper m-auto text-center px-4 ">
        <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
          {data.tag}
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight onest">
          {data.title}
        </h2>
        <p className="text-gray-600 max-w-2xl m-auto mb-16 text-lg onest">{data.description}</p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {data.cards.map((card: any, i: number) => {
            return (
              <div
                key={i}
                className="rounded-3xl p-8 border border-gray-100 hover:border-[#0d542b]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl  flex items-center justify-center mb-6 ">
                  <Image src={card.icon} alt={card.title} width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black bicroLage">{card.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {data.points.map((p: string, i: number) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm"
            >
              <div className="w-6 h-6 rounded-full bg-[#0d542b] flex items-center justify-center">
                <FiCheck className="text-white" size={14} />
              </div>
              <span className="text-slate-800 font-medium">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
