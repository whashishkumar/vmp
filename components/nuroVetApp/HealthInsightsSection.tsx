import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';

export function HealthInsightsSection({ healthData }: any) {
  return (
    <section className="py-16 bg-color">
      <div className="wrapper m-auto px-6">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
            {healthData.tag}
          </div>

          <SectionHeading title={healthData.title} subTitle={healthData.desc} />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {healthData.cards.map((c:any, i:any) => {
              const Icon = c.icon;
              return (
                <div key={i} className={`${c.bg} rounded-2xl p-6`}>
                  <div
                    className={`w-12 h-12 rounded-xl ${c.iconBg} text-white flex items-center justify-center mb-4`}
                  >
                    <Icon />
                  </div>
                  <h4 className="font-semibold text-black mb-1 bicroLage">{c.title}</h4>
                  <p className="text-sm text-gray-600">{c.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="relative w-full h-120 lg:h-140">
            <Image
              src={healthData?.image}
              alt="Health insights app"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
