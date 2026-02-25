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
    <section className="py-20 bg-white">
      <div className="wrapper mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium mb-4">
            <FiHelpCircle />
            {data.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-800 leading-tight">
            {data.title.line1}{' '}
            <span className="bg-linear-to-r from-emerald-500 via-teal-500 to-indigo-500 bg-clip-text text-transparent">
              {data.title.highlight}
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">{data.description}</p>
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

                  <p className="font-semibold text-slate-800">{f.title}</p>
                  <p className="text-sm text-slate-600">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT CHAT UI */}
        <div className="relative">
          <Image src={data.rightImage} alt="image" height={505} width={654} className='rounded-2xl object-contain' />
        </div>
      </div>
    </section>
  );
}
