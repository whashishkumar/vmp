import Image from 'next/image';
import { FaMobileAlt, FaVideo, FaFileAlt, FaHeart } from 'react-icons/fa';

import {
  FaBolt,
  FaQuestionCircle,
  FaSmile,
  FaDesktop,
  FaNotesMedical,
  FaClock,
} from 'react-icons/fa';

const featureIconMap = {
  bolt: FaBolt,
  question: FaQuestionCircle,
  smile: FaSmile,
  desktop: FaDesktop,
  notes: FaNotesMedical,
  clock: FaClock,
};

export function AllInOneAppSection({ appFeatureData }: any) {
  return (
    <section className="py-16 bg-color">
      <div className="wrapper mx-auto px-6 lg:px-0 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-4 onest">
            {appFeatureData.tag}
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight onest">
            {appFeatureData.title}
          </h2>

          <p className="text-gray-500 mb-4 max-w-xl onest">{appFeatureData.desc}</p>

          <div className="space-y-4">
            {appFeatureData.features.map((f: any, i: any) => {
              const Icon = featureIconMap[f.icon as keyof typeof featureIconMap];
              return (
                <div
                  key={i}
                  className={`flex items-start gap-4 p-5 rounded-2xl border bg-white border-gray-200 `}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#00522C]/90 text-white">
                    {/* <Icon size={18} /> */}
                  </div>
                  <div>
                    <h4 className="font-semibold text-black bicroLage">{f.title}</h4>
                    <p className="text-sm text-gray-500">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* RIGHT */}
        <div className="relative flex justify-center items-center">
          <Image
            src={appFeatureData.image}
            alt="Veterinary website"
            width={700}
            height={520}
            className="w-full h-auto object-cover drop-shadow-2xl rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
