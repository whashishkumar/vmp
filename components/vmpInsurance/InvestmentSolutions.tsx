import Image from 'next/image';
import { FiCheck, FiArrowRight, FiBarChart2 } from 'react-icons/fi';
import Button from '../ui/Button';
import Link from 'next/link';

export default function InvestmentSolutions({ data }: any) {
  const { label, href } = data?.cta?.invest || {};

  return (
    <section className="relative overflow-hidden py-16 bg-color px-6 lg:px-0">
      <div className="relative inner-wrapper m-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-163.5 mx-auto lg:mx-0 aspect-554/545">
          <Image
            src={data.image}
            alt="banner"
            fill
            className="object-cover rounded-2xl w-full "
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 554px"
          />
        </div>
        {/* RIGHT CONTENT */}
        <div>
          <div className="inline-flex items-center gap-2 bg-[#cfeee0] text-[#1f7a5a] px-5 py-2 rounded-full text-sm font-semibold mb-6 onest">
            {data.tag}
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold mb-6 onest">{data.title}</h2>
          <p className="text-gray/600 mb-8 max-w-xl onest">{data.description}</p>
          <div className="space-y-5 mb-10">
            {data.cards.map((p: any, i: number) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                  <Image
                    src={p.icon}
                    alt={p.title}
                    width={64}
                    height={64}
                    className="object-contian"
                  />
                </div>
                <div>
                  <p className="font-semibold bicroLage text-black">{p.title}</p>
                  <p className="text-gray/600 text-sm">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <Link
              href={href}
              className="bg-[#0d542b]  text-center gap-2 rounded-lg px-6 py-4 text-sm font-semibold text-white cursor-pointer"
            >
              {label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
