'use client';
import Image from 'next/image';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

export default function ReviewCard({ name, role, avatar, rating, review }: any) {
  return (
    <div className="relative bg-[#F9F5EF] rounded-3xl px-6 py-4 shadow-sm max-w-3xl mx-auto  flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-500 text-md">{role}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="text-[#0a5e3b] text-lg" />
        ))}
      </div>
      <div className=" overflow-y-auto pr-2 line-clamp-6">
        <p className="text-gray-600 text-md leading-relaxed">“{review}”</p>
      </div>
      <div className="absolute -bottom-0 -right-0 w-16 h-16  rounded-full flex items-center justify-center ">
        <FaQuoteRight className="text-[#0a5e3b] text-2xl" />
      </div>
    </div>
  );
}