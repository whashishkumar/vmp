import Image from 'next/image';
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

export default function VetWebDesignSection({ vetWebData }: any) {
  return (
    <section className="relative overflow-hidden py-16 bg-white">
      <div className="wrapper m-auto px-6 lg:px-0 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <Image
            src={vetWebData.image}
            alt="Veterinary website"
            width={700}
            height={520}
            className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
            priority
          />
        </div>
        {/* RIGHT CONTENT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-4 onest">
            {vetWebData.tag}
          </div>
          <SectionHeading
            title={vetWebData.title}
            subTitle={vetWebData.description}
            cssClass={'text-left py-4'}
          />
          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {vetWebData.features.map((f: any, i: number) => {
              // const Icon = f.icon;
              const Icon = iconMap[f.icon as keyof typeof iconMap];

              return (
                <div
                  key={i}
                  className="flex items-start gap-4 border border-black/5 shadow-sm rounded-xl p-5 "
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${f.color}`}
                  >
                    {Icon && <Icon className="text-[#00522C]/80" size={28} />}
                  </div>

                  <div>
                    <div className="font-semibold bicroLage">{f.text}</div>
                    <div className="text-slate-500 text-sm">{f.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
