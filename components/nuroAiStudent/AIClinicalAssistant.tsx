import Image from 'next/image';
import { FiHelpCircle, FiZap, FiCheckSquare, FiClock, FiSend, FiCheck } from 'react-icons/fi';

const iconMap: any = {
  FiHelpCircle,
  FiZap,
  FiCheckSquare,
  FiClock,
};

const themeStyles: any = {
  teal: 'bg-teal-50 border-teal-100',
  purple: 'bg-purple-50 border-purple-100',
  pink: 'bg-pink-50 border-pink-100',
  green: 'bg-emerald-50 border-emerald-100',
};

const iconBg: any = {
  teal: 'bg-teal-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  green: 'bg-emerald-500',
};

export default function AIClinicalAssistant({ data }: any) {
  return (
    <section className="py-16 bg-color px-6 lg:px-0">
      <div className="wrapper mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 onest text-sm font-medium mb-4">
            <FiHelpCircle />
            {data.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight onest">
            {data.title.line1}
            <span>{data.title.highlight}</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl onest">{data.description}</p>
          {/* feature cards */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {data.features.map((f: any, i: number) => {
              const Icon = iconMap[f.icon];
              return (
                <div key={i} className={`rounded-2xl border p-5 ${themeStyles[f.theme]}`}>
                  <div
                    className={`w-10 h-10 rounded-lg text-white flex items-center justify-center ${iconBg[f.theme]} mb-3`}
                  >
                    <Icon />
                  </div>

                  <p className="font-semibold text-black bicroLage">{f.title}</p>
                  <p className="text-sm text-slate-600">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT CHAT UI */}
        <div className="relative">
          <div className="relative w-full max-w-163.5 mx-auto overflow-hidden rounded-3xl bg-gray-50/50 border border-gray-100 shadow-sm">
            <Image
              src={data.rightImage}
              alt="Partner Network Illustration"
              width={654}
              height={505}
              // 'w-full h-auto' ensures it scales perfectly while maintaining the 654:505 ratio
              className="w-full h-auto object-contain transition-all duration-500 hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 654px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
