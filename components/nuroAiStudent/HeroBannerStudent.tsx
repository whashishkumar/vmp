import Image from "next/image";
import { FiArrowRight, FiCheck, FiBookOpen, FiZap } from "react-icons/fi";

export default function HeroBannerStudent({ data }: any) {
  return (
    <section className="relative overflow-hidden py-20 bg-color">
      <div className="wrapper m-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            {data.badge}
          </div>

          {/* title */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-slate-800">
            {data.title.line1}{" "}
            <span className="bg-linear-to-r from-emerald-500 via-teal-500 to-indigo-500 bg-clip-text text-transparent">
              {data.title.highlight}
            </span>
          </h1>

          {/* desc */}
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            {data.description}
          </p>

          {/* buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold flex items-center gap-2 shadow hover:scale-[1.02] transition">
              {data.primaryBtn}
              <FiArrowRight />
            </button>

            <button className="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition">
              {data.secondaryBtn}
            </button>
          </div>

          {/* avatars */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["S", "M", "A", "+"].map((l, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shadow ${
                    i === 0
                      ? "bg-teal-400"
                      : i === 1
                      ? "bg-purple-400"
                      : i === 2
                      ? "bg-blue-400"
                      : "bg-emerald-400"
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
          <Image  src={data.dashboardImage} alt="AI Dashboard" width={600} height={400} className="rounded-2xl object-contian" />
        </div>
      </div>
    </section>
  );
}