import { FiCalendar, FiZap, FiShield, FiCloud } from 'react-icons/fi';

export default function VetCtaStats({ data }: any) {
  return (
    <section className="relative overflow-hidden py-24 text-white text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#041b10] via-[#0a4d2e]/90 to-[#06281a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,77,46,0.35),transparent_60%)]" />
      <div className="relative wrapper mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {data.stats.map((s: any, i: number) => (
            <div
              key={i}
              className="rounded-2xl px-8 py-6 bg-gradient-to-br from-[#06281a]/50 to-[#0a4d2e] border border-white/10 shadow"
            >
              <p className="text-4xl font-semibold">{s.value}</p>
              <p className="text-white/60 mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-400/30 text-white text-sm mb-6">
          <span className="w-2 h-2 bg-teal-400 rounded-full " />
          {data.badge}
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold max-w-3xl mx-auto ">{data.title}</h2>
        <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">{data.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold flex items-center gap-2 hover:scale-[1.03] transition">
            <FiCalendar />
            {data.primaryBtn}
          </button>

          <button className="px-8 py-3 rounded-xl bg-white/10 border border-white/20 flex items-center gap-2 hover:bg-white/15 transition">
            <FiZap />
            {data.secondaryBtn}
          </button>
        </div>
      </div>
    </section>
  );
}
