import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export default function CTASection({ data }: any) {
  return (
    <section className="relative overflow-hidden py-20 px-6 lg:px-0">
      {/* Gradient BG */}
      <div className="absolute inset-0 bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
      />

      {/* Content */}
      <div className="relative wrapper mx-auto text-center text-white">
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <Image
            src={data.image}
            alt="Family and pet"
            width={180}
            height={180}
            className="w-54 h-auto"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold max-w-4xl mx-auto leading-tight">
          {data.title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
          {data.description}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-white text-emerald-700 font-semibold shadow hover:scale-[1.02] transition">
            {data.primaryBtn}
          </button>

          <button className="px-8 py-3 rounded-full border border-white/80 text-white font-semibold hover:bg-white/10 transition">
            {data.secondaryBtn}
          </button>
        </div>

        {/* Points */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90">
          {data.points.map((p: string, i: number) => (
            <div key={i} className="flex items-center gap-2">
              <FiCheck className="text-white" />
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}