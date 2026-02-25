import Image from 'next/image';
import { FiCheck, FiArrowRight, FiBarChart2 } from 'react-icons/fi';
import Button from '../ui/Button';

export default function InvestmentSolutions({ data }: any) {
  return (
    <section className="relative overflow-hidden py-16 bg-color px-6 lg:px-0">
      <div className="relative wrapper mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full overflow-hidden rounded-2xl bg-gray-50">
          <Image
            src={data.image}
            alt="banner"
            width={554}
            height={545}
            className="w-full h-auto max-h-137.5 object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 text-black text-sm mb-6 onest">
            {data.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6 onest">{data.title}</h2>
          <p className="text-gray/600 mb-8 max-w-xl onest">{data.description}</p>
          <div className="space-y-5 mb-10">
            {data.points.map((p: any, i: number) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <FiCheck className="text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-gray/600 text-sm">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Button label={data.cta} className="bg-[#0d542b]! text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
