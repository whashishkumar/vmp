import SectionHeading from '../common/SectionHeading';
import {
  FaSearch,
  FaBullhorn,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPalette,
  FaMobileAlt,
  FaCalendarCheck,
  FaChartLine,
  FaCog,
  FaBolt,
  FaSyncAlt,
  FaLock,
  FaPuzzlePiece,
  FaLifeRing,
} from 'react-icons/fa';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  FaSearch,
  FaBullhorn,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPalette,
  FaMobileAlt,
  FaCalendarCheck,
  FaChartLine,
  FaCog,
  FaBolt,
  FaSyncAlt,
  FaLock,
  FaPuzzlePiece,
  FaLifeRing,
};

export default function TechServicesSection({ techData }: any) {
  return (
    <section className="py-24 bg-white text-white">
      <div className="wrapper m-auto px-6 lg:px-0">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
            {techData.tag}
          </div>
          <SectionHeading title={techData.title} subTitle={techData.description} cssClass="" />
        </div>
        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techData.features.map((s: any, i: number) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <div
                key={i}
                className="bg-[#0f4e34]/95 border border-[#1F4D38] rounded-2xl p-6 hover:border-[#2E7D57] transition"
              >
                <div className="w-12 h-12 rounded-xl bg-[#034c2a]/90 flex items-center justify-center mb-5">
                  <Icon className="text-white" size={22} />
                </div>
                <div className="font-semibold text-lg mb-2">{s.title}</div>
                <p className="text-white/80 text-sm mb-4">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
