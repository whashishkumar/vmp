import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';

export function SmartChatSection({ chatData }: any) {
  return (
    <section className="py-16 bg-white">
      <div className="wrapper m-auto px-6 lg:px-0 grid md:grid-cols-2 gap-16 items-center">
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
              subTitle={chatData.desc}
              cssClass={'text-left'}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {chatData.features.map((f: any, i: any) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${f.color}`}
                  >
                    <Icon />
                  </div>
                  <div className="font-medium text-gray-800">{f.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
