import { FiZap, FiShield, FiClock, FiCheckCircle, FiUsers, FiArrowRight } from 'react-icons/fi';

const iconMap: any = {
  FiShield,
  FiClock,
  FiCheckCircle,
  FiUsers,
};

export default function FinalCTA({ data }: any) {
  return (
    <section className="relative overflow-hidden py-24 text-center text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#041b10] via-[#0a4d2e] to-[#06281a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,77,46,0.35),transparent_60%)]" />
      <div className="relative wrapper mx-auto max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
          <FiZap />
          {data.badge}
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          {data.title.normal}{' '}
          <span className="bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {data.title.highlight}
          </span>
        </h2>
        <p className="mt-4 text-lg text-white/0 max-w-2xl mx-auto">{data.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 rounded-xl bg-linear-to-r from-teal-500 to-cyan-500 font-semibold flex items-center gap-2 hover:scale-[1.03] transition">
            {data.primaryBtn}
            <FiArrowRight />
          </button>

          <button className="px-8 py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition">
            {data.secondaryBtn}
          </button>
        </div>
        <div className="mt-10 h-px bg-white/10" />
        <div className="mt-6 flex flex-wrap justify-center gap-8 text-white/70">
          {data.points.map((p: any, i: number) => {
            const Icon = iconMap[p.icon];
            return (
              <div key={i} className="flex items-center gap-2">
                <Icon className="text-teal-400" />
                <span>{p.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
