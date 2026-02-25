import { FaBolt, FaCheck, FaPlus, FaHeart } from "react-icons/fa";

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
        {/* Tag */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
          {data.tag}
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold text-slate-800 max-w-4xl mx-auto leading-tight">
          {data.title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-slate-600 text-lg max-w-3xl mx-auto">
          {data.description}
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.features.map((item: any, i: number) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={i}
                className={`text-left rounded-2xl p-6 bg-gradient-to-br ${item.bg}`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${item.iconBg}`}
                >
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold text-slate-800 leading-snug">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}