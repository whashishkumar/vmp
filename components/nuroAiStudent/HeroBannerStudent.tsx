import Image from 'next/image';
import Link from 'next/link';

export default function HeroBannerStudent({ data }: any) {
  const { ctas } = data || {};

  return (
    <section className="relative overflow-hidden py-16 bg-color px-6 lg:px-0">
      <div className="wrapper m-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            {data.badge}
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-black onest">
            {data.title}
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl onest">{data.description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex flex-wrap gap-5 items-center">
              {ctas?.map((btn: any, i: number) => (
                <Link
                  key={i}
                  href={btn.href}
                  className={
                    btn.variant === 'primary'
                      ? 'px-8 py-4 rounded-full font-normal shadow-sm  bg-white text-[#006039] cursor-pointer'
                      : 'px-8 py-4 rounded-full border border-white text-white bg-[#006039]'
                  }
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>
          {/* avatars */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {['S', 'M', 'A', '+'].map((l, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shadow ${
                    i === 0
                      ? 'bg-teal-400'
                      : i === 1
                        ? 'bg-purple-400'
                        : i === 2
                          ? 'bg-blue-400'
                          : 'bg-emerald-400'
                  }`}
                >
                  {l}
                </div>
              ))}
            </div>
            <div>
              <p className="font-semibold text-slate-800">{data.students}</p>
              <p className="text-sm text-slate-500">{data.sub}</p>
            </div>
          </div>
        </div>
        {/* RIGHT DASHBOARD */}
        <div className="relative">
          <Image
            src={data.dashboardImage}
            alt="AI Dashboard"
            width={600}
            height={400}
            className="rounded-2xl object-contian"
          />
        </div>
      </div>
    </section>
  );
}
