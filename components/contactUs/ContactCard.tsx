'use client';

import { IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5';

const iconMap = {
  mail: IoMailOutline,
  call: IoCallOutline,
  location: IoLocationOutline,
};

export default function ContactCard({ data }: any) {
  const Icon = iconMap[data.icon as keyof typeof iconMap] || IoMailOutline;

  /* helpers */
  const isEmail = (text: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text);

  const isPhone = (text: string) => /^[+()\-\s\d]{7,}$/.test(text);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center w-full max-w-md mx-auto hover:shadow-lg transition">
      <div className="flex justify-center mb-4">
        <Icon size={46} className="text-[#0a3f2a]/80" />
      </div>

      <h3 className="text-xl font-bold text-black mb-4">{data.title}</h3>

      <div className="space-y-2 text-lg text-gray-700">
        {data?.lines?.map((line: string, i: number) => {
          if (isEmail(line)) {
            return (
              <p key={i}>
                <a
                  href={`mailto:${line}`}
                  className="hover:text-primary underline-offset-2 hover:underline"
                >
                  {line}
                </a>
              </p>
            );
          }

          if (isPhone(line)) {
            const tel = line.replace(/[^\d+]/g, '');
            return (
              <p key={i}>
                <a
                  href={`tel:${tel}`}
                  className="hover:text-primary underline-offset-2 hover:underline"
                >
                  {line}
                </a>
              </p>
            );
          }

          return <p key={i}>{line}</p>;
        })}
      </div>
    </div>
  );
}
