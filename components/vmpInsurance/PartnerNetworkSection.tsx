import {
  FiUsers,
  FiGlobe,
  FiHome,
  FiShield,
  FiTrendingUp,
  FiDollarSign,
  FiMonitor,
} from 'react-icons/fi';

const iconMap: any = {
  FiShield,
  FiTrendingUp,
  FiDollarSign,
  FiMonitor,
};

export default function PartnerNetworkSection({ data }: any) {
  return (
    <section className="relative overflow-hidden py-16 bg-white text-black px-6 lg:px-0">
      <div className="relative wrapper mx-auto text-center px-4">
        <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
          {data.badge}
        </div>
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-black onest">
          {data.title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg onest">{data.description}</p>
        <div className="max-w-4xl mx-auto rounded-3xl bg-gray-50 border border-gray-100 p-12 mb-14 relative shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            <div className="text-center z-10">
              <div className="w-16 h-16 rounded-full bg-[#0d542b]/10 flex items-center justify-center mx-auto mb-4 border border-[#0d542b]/20">
                <FiUsers className="text-[#0d542b]" size={26} />
              </div>
              <p className="font-bold text-black bicroLage">{data.hub.left.title}</p>
              <p className="text-gray-500 text-sm">{data.hub.left.subtitle}</p>
            </div>
            <div className="text-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-[#0d542b] flex items-center justify-center mx-auto mb-4 shadow-xl">
                <FiGlobe className="text-white" size={30} />
              </div>
              <p className="font-bold text-xl text-black bicroLage">{data.hub.center.title}</p>
              <p className="text-gray-500 text-sm">{data.hub.center.subtitle}</p>
            </div>
            {/* Right node */}
            <div className="text-center z-10">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 border border-blue-100">
                <FiHome className="text-blue-600" size={26} />
              </div>
              <p className="font-bold text-black bicroLage">{data.hub.right.title}</p>
              <p className="text-gray-500 text-sm">{data.hub.right.subtitle}</p>
            </div>
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-10 w-2/3 h-0.5 bg-linear-to-r from-transparent via-gray-200 to-transparent" />
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-6 text-left">
          {data.features.map((f: any, i: number) => {
            const Icon = iconMap[f.icon];
            return (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0d542b]/10 flex items-center justify-center mb-4">
                  <Icon className="text-[#0d542b]" size={20} />
                </div>
                <p className="font-bold text-black mb-1 bicroLage">{f.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
