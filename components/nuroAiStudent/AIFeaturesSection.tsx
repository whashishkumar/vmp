import { FiBookOpen, FiZap, FiMousePointer, FiCheckCircle, FiLayout } from 'react-icons/fi';
import { FaBolt } from 'react-icons/fa';

const iconMap: any = {
  FiBookOpen,
  FiZap,
  FiFlash: FaBolt,
  FiMousePointer,
  FiCheckCircle,
  FiLayout,
};

const themeStyles: any = {
  teal: 'bg-gradient-to-br from-teal-50 to-teal-100/40 border-teal-100',
  purple: 'bg-gradient-to-br from-purple-40 to-purple-100/40 border-purple-100',
  blue: 'bg-gradient-to-br from-blue-50 to-blue-100/40 border-blue-100',
  green: 'bg-gradient-to-br from-emerald-50 to-emerald-100/40 border-emerald-100',
  pink: 'bg-gradient-to-br from-pink-40 to-pink-100/30 border-pink-100',
  dark: 'bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-800',
};

const iconBg: any = {
  teal: 'bg-teal-400',
  purple: 'bg-purple-500',
  blue: 'bg-blue-400',
  green: 'bg-emerald-400',
  pink: 'bg-pink-600',
  dark: 'bg-cyan-500',
};

export default function AIFeaturesSection({ data }: any) {
  return (
    <section className="py-20 bg-white">
      <div className="wrapper m-auto">
        {/* Header */}
        <div className="text-center  ">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            {data.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-800">{data.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{data.description}</p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.features.map((item: any, i: number) => {
            const Icon = iconMap[item.icon];
            const isDark = item.theme === 'dark';

            return (
              <div
                key={i}
                className={`rounded-3xl p-8 border ${themeStyles[item.theme]} ${
                  isDark ? 'shadow-xl' : ''
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${iconBg[item.theme]} mb-6`}
                >
                  <Icon size={22} />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`${isDark ? 'text-white/80' : 'text-slate-600'}`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
