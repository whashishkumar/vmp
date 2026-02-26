import Image from 'next/image';
import SectionHeading from '../common/SectionHeading';

export default function MerchantServices({ data }: any) {
  return (
    <section className="py-16 bg-color px-6 lg:px-0">
      <div className="wrapper mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-164 aspect-654/544">
            <Image src={data.image} alt="banner" fill className="object-cover rounded-2xl" />
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-4 onest">
            {data.tag}
          </div>
          <SectionHeading title={data.title} subTitle={data.description} cssClass="text-left" />
          <div className="mt-4 space-y-4">
            {data.features.map((item: any, i: number) => {
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/70 backdrop-blur rounded-2xl p-5 border border-white"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={120}
                      height={120}
                      className="object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black bicroLage">{item.title}</h3>
                    <p className="text-slate-600 text-sm mt-1">{item.text}</p>
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
