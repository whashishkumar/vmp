import Image from 'next/image';
import { FiLock, FiCreditCard, FiDollarSign, FiClock, FiCheck } from 'react-icons/fi';

const iconMap: any = {
  FiLock,
  FiCreditCard,
  FiDollarSign,
  FiClock,
};

export default function MerchantServices({ data }: any) {
  return (
    <section className="py-16 bg-color px-6 lg:px-0">
      <div className="wrapper mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-138.5 mx-auto lg:mx-0 aspect-554/545">
          <Image
            src={data.image}
            alt="banner"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 554px"
          />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
            {data.tag}
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight onest">
            {data.title}
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-xl onest">{data.description}</p>
          {/* features */}
          <div className="mt-8 space-y-4">
            {data.features.map((item: any, i: number) => {
              const Icon = iconMap[item.icon];

              return (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/70 backdrop-blur rounded-2xl p-5 border border-white"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}
                  >
                    <Icon className={`text-xl ${item.iconColor}`} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-black bicroLage">{item.title}</h3>
                    <p className="text-slate-600 text-sm mt-1">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
