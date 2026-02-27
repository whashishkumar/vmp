import Link from 'next/link';
import { FaSmile, FaUsers, FaShieldAlt, FaBolt } from 'react-icons/fa';

const iconMap = {
  smile: <FaSmile />,
  users: <FaUsers />,
  shield: <FaShieldAlt />,
  bolt: <FaBolt />,
};

export function PropertyManagersSection({ content }: any) {
  const { cta } = content?.cta;

  return (
    <section className="py-16 px-6 lg:px-0">
      <div className="inner-wrapper m-auto px-6 rounded-4xl bg-linear-to-br from-[#017131] via-[#027234] to-[#016436] p-12 lg:p-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="inline-block bg-white/10 text-white text-sm font-medium px-4 py-1 rounded-full mb-6">
            {content.tag}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {content.title}
          </h2>
          <p className="text-white/70 mb-10 max-w-xl">{content.description}</p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {content.features.map((f: any, i: number) => (
              <div key={i} className="bg-white/5 rounded-2xl p-6">
                {/* FIXED: Background lightened for black text icon/content */}
                <div className="w-12 h-12 rounded-xl bg-[#E6F0EB] flex items-center justify-center text-[#00522C] mb-4">
                  {iconMap[f.icon as keyof typeof iconMap]}
                </div>
                <h4 className="font-semibold text-white mb-1">{f.title}</h4>
                <p className="text-sm text-white/60">{f.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 bg-white text-[#017131] hover:bg-gray-100 font-semibold px-8 py-4 rounded-full transition-colors"
          >
            {cta.label}
          </Link>
        </div>

        {/* RIGHT MOCK CARD */}
        <div className="bg-white/10 backdrop-blur rounded-3xl p-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white">
              <FaUsers />
            </div>
            <div>
              <div className="font-semibold">{content.mockCard.communityName}</div>
              <div className="text-white/60 text-sm">{content.mockCard.communityType}</div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {content.mockCard.activities.map((act: any, i: number) => (
              <div key={i} className="bg-white/10 rounded-xl p-4 flex justify-between">
                <div>
                  <div className="font-medium">{act.unit}</div>
                  <div className="text-white/60 text-sm">{act.time}</div>
                </div>
                {/* FIXED: Status text color for readability */}
                <div className={act.isActive ? 'text-green-300 font-medium' : 'text-white/40'}>
                  {act.status}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 flex justify-between items-end">
            <div>
              <div className="text-white/60 text-sm">{content.mockCard.statsLabel}</div>
              <div className="text-3xl font-bold">{content.mockCard.statsValue}</div>
            </div>
            <div className="text-green-400 text-sm font-bold">{content.mockCard.statsTrend}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
