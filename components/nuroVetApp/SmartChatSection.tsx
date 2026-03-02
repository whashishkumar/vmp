import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';
import { FaBolt, FaPaperclip, FaLightbulb, FaHistory, FaCheck } from 'react-icons/fa';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  FaBolt,
  FaPaperclip,
  FaLightbulb,
  FaHistory,
};

export function SmartChatSection({ chatData }: any) {
  return (
    <section className="py-16 bg-white">
      <div className="wrapper m-auto px-6  grid md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-full lg:h-110">
          <Image
            src={chatData?.image}
            alt="Chat app"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold  onest">
            {chatData.tag}
          </div>
          <div className="py-4 ">
            <SectionHeading
              title={chatData.title}
              subTitle={chatData.description}
              cssClass={'text-left'}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {chatData.features.map((f: any, i: any) => {
              const Icon = iconMap[f.icon as keyof typeof iconMap];

              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-[#00522C]/10`}
                  >
                   {Icon && <Icon className="text-[#00522C]/80" size={24} />}
                  </div>
                  <div className="font-medium text-gray-800">{f.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
