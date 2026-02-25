import { FaBolt, FaCheck, FaPlus, FaHeart } from 'react-icons/fa';

const iconMap: any = {
  FaBolt,
  FaCheck,
  FaPlus,
  FaHeart,
};

export default function FinancingSection({ data }: any) {
  return (
    <section className="py-16 bg-white">
      <div className="wrapper m-auto text-center px-6 lg:px-0">
        <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
          {data.tag}
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold text-black max-w-4xl mx-auto leading-tight onest">
          {data.title}
        </h2>
        <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto onest">{data.description}</p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {data.features.map((item: any, i: number) => {
            const Icon = iconMap[item.icon];

            return (
              <div key={i} className={`text-left rounded-2xl p-6 bg-linear-to-br ${item.bg}`}>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${item.iconBg}`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-black leading-snug bicroLage">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
