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
    <section className="py-16 bg-gradient-to-b from-[#eef7f3] to-[#e6f1ec] px-6 lg:px-0">
      <div className="wrapper mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT DASHBOARD MOCK */}
        <div className="w-full max-w-130">
          <Image
            src={data.image}
            alt="Dashboard Mockup"
            width={520}
            height={520}
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>
        {/* RIGHT CONTENT */}
        <div>
          {/* tag */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            {data.tag}
          </div>

          {/* title */}
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-800 leading-tight">
            {data.title}
          </h2>

          {/* description */}
          <p className="mt-4 text-slate-600 text-lg max-w-xl">{data.description}</p>

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
                    <h3 className="font-semibold text-slate-800">{item.title}</h3>
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
