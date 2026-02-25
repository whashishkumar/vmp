import {
  FiPlus,
  FiHeart,
  FiTrendingUp,
  FiDollarSign,
  FiSmile,
  FiFileText,
  FiCalendar,
  FiCheckCircle,
  FiShield,
} from 'react-icons/fi';

const iconMap: any = {
  FiPlus,
  FiHeart,
  FiTrendingUp,
  FiDollarSign,
  FiSmile,
  FiFileText,
  FiCalendar,
  FiCheckCircle,
  FiShield,
};

const themeStyles: any = {
  green: {
    card: 'bg-gradient-to-b from-emerald-50 to-emerald-100/40',
    headerIcon: 'bg-emerald-600 text-white',
    itemIcon: 'bg-emerald-500/10 text-emerald-600',
  },
  orange: {
    card: 'bg-gradient-to-b from-orange-50 to-orange-100/40',
    headerIcon: 'bg-orange-500 text-white',
    itemIcon: 'bg-orange-500/10 text-orange-600',
  },
};

export default function BenefitsSection({ data }: any) {
  return (
    <section className="py-16 bg-white">
      <div className="wrapper m-auto px-6 lg:px-0">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            {data.tag}
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold text-slate-800">{data.title}</h2>

          <p className="mt-4 text-slate-600 text-lg">{data.description}</p>
        </div>

        {/* Columns */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {data.columns.map((col: any, i: number) => {
            const HeaderIcon = iconMap[col.icon];
            const theme = themeStyles[col.theme];

            return (
              <div key={i} className={`rounded-3xl p-8 ${theme.card}`}>
                {/* Column Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${theme.headerIcon}`}
                  >
                    <HeaderIcon size={26} />
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-800">{col.title}</h3>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {col.items.map((item: any, idx: number) => {
                    const Icon = iconMap[item.icon];

                    return (
                      <div key={idx} className="flex items-start gap-4 bg-white/70 rounded-2xl p-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.itemIcon}`}
                        >
                          <Icon size={18} />
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-800">{item.title}</h4>
                          <p className="text-slate-600 text-sm">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
