import { FaClinicMedical, FaDesktop, FaCheck, FaTimes } from 'react-icons/fa';

export function WhyVirtualCareSection({ comparisonData }: any) {
  return (
    <section className="py-16 bg-white">
      <div className="wrapper m-auto px-6 lg:px-0">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
            {comparisonData.tag}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black onest mb-4">
            {comparisonData.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto onest">{comparisonData.desc}</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative bg-white border border-gray-200 rounded-3xl p-10">
            <div className="absolute top-0 right-0 bg-gray-200 text-gray-700 text-xs font-semibold px-4 py-1 rounded-bl-2xl rounded-tr-3xl">
              Traditional
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-600 mb-6">
              <FaClinicMedical size={24} />
            </div>

            <h3 className="text-2xl font-semibold text-black mb-6 bicroLage">
              {comparisonData.clinic.title}
            </h3>

            <ul className="space-y-4">
              {comparisonData.clinic.points.map((p: any, i: number) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                    <FaTimes size={10} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Virtual */}
          <div className="relative bg-gradient-to-br from-[#006134] to-[#006d3a] text-white rounded-3xl p-10 shadow-xl">
            <div className="absolute top-0 right-0 bg-[#00522C]/90 text-white text-xs font-semibold px-4 py-1 rounded-bl-2xl rounded-tr-3xl">
              Recommended
            </div>

            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
              <FaDesktop size={24} />
            </div>

            <h3 className="text-2xl font-semibold mb-6 bicroLage">
              {comparisonData.virtual.title}
            </h3>

            <ul className="space-y-4">
              {comparisonData.virtual.points.map((p: any, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <FaCheck size={10} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
