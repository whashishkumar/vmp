import SectionHeading from '../common/SectionHeading';

export function WhyLoveSection({ whyLoveData }: any) {
  return (
    <section className="py-24 bg-color">
      <div className="inner-wrapper m-auto px-6 lg:px-0">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionHeading title={whyLoveData.title} subTitle={whyLoveData.desc} />
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {whyLoveData.features.map((f: any, i: number) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white border border-[#E6F4EC] rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#00522C] flex items-center justify-center shadow-md">
                  <Icon className="text-white text-lg" />
                </div>

                <div className="font-semibold text-[#0B1B33]">{f.title}</div>
                <div className="text-[#5B6B7A] text-sm">{f.desc}</div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="rounded-4xl bg-[#00522C] p-10 lg:p-14 text-center shadow-xl">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            {whyLoveData.cta.title}
          </h3>

          <p className="text-white/90 max-w-2xl mx-auto mb-8">{whyLoveData.cta.desc}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {whyLoveData.cta.buttons.map((btn: any, i: number) => {
              const Icon = btn.icon;

              const base =
                'inline-flex items-center gap-2 font-semibold px-8 py-3 rounded-full transition';

              const variants = {
                light: 'bg-white text-[#00522C] hover:bg-[#E6F4EC]',
                outline: 'border border-white/40 text-white hover:bg-white/10',
              };

              return (
                <button key={i} className={`${base} ${variants[btn.variant as keyof typeof variants]}`}>
                  <Icon />
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
