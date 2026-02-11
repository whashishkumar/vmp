import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Button({
  label = 'Button',
  onClick,
  showIcon = true,
  className = '',
}: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#2E7D5A] hover:bg-opacity-90 transition ${className}`}
    >
      {label}
      {showIcon && (
        <span className="rounded  bg-[#2E7D5A] p-2">
          <Image src={'/icons/vmpbtnicon.png'} height={15} width={15} alt='icon' className='object-contain' />
          {/* <FiArrowUpRight size={14} className="text-white" /> */}
        </span>
      )}
    </button>
  );
}
