'use client';

import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline
} from "react-icons/io5";

const iconMap = {
  mail: IoMailOutline,
  call: IoCallOutline,
  location: IoLocationOutline,
};

export default function ContactCard({ data }: any) {
   const Icon = iconMap[data.icon as keyof typeof iconMap] || IoMailOutline;
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center w-full max-w-md mx-auto hover:shadow-lg transition">
      <div className="flex justify-center mb-4">
        <Icon size={46} className="text-[#0a3f2a]/80" />
      </div>
      <h3 className="text-xl font-bold text-black mb-4">
        {data.title}
      </h3>
      <div className="space-y-2 text-lg text-gray-700">
        {data?.lines?.map((line:any, i:any) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}
