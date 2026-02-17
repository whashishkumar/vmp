'use client';

import Link from 'next/link';

type PaginationProps = {
  currentPage: number;
  lastPage: number;
  basePath?: string;
};

export default function Pagination({ currentPage, lastPage, basePath = '/blog' }: PaginationProps) {
  if (lastPage <= 1) return null;

  const pages: number[] = [];
  const maxVisible = 5;
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  const end = Math.min(lastPage, start + maxVisible - 1);
  start = Math.max(1, end - maxVisible + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex items-center justify-center gap-2 mt-12 mb-8" aria-label="Blog pagination">
      <Link
        href={currentPage > 1 ? `${basePath}?page=${currentPage - 1}` : '#'}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          currentPage <= 1
            ? 'text-gray-400 cursor-not-allowed pointer-events-none'
            : 'text-[#0a4d2e] hover:bg-[#0a4d2e]/10'
        }`}
        aria-disabled={currentPage <= 1}
      >
        ← Previous
      </Link>

      <div className="flex items-center gap-1">
        {start > 1 && (
          <>
            <Link
              href={`${basePath}?page=1`}
              className="px-3 py-2 rounded-lg font-medium text-[#0a4d2e] hover:bg-[#0a4d2e]/10 transition"
            >
              1
            </Link>
            {start > 2 && <span className="px-2 text-gray-400">...</span>}
          </>
        )}
        {pages.map((page) => (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`px-3 py-2 rounded-lg font-medium transition ${
              page === currentPage
                ? 'bg-[#0a4d2e] text-white'
                : 'text-[#0a4d2e] hover:bg-[#0a4d2e]/10'
            }`}
          >
            {page}
          </Link>
        ))}
        {end < lastPage && (
          <>
            {end < lastPage - 1 && <span className="px-2 text-gray-400">...</span>}
            <Link
              href={`${basePath}?page=${lastPage}`}
              className="px-3 py-2 rounded-lg font-medium text-[#0a4d2e] hover:bg-[#0a4d2e]/10 transition"
            >
              {lastPage}
            </Link>
          </>
        )}
      </div>

      <Link
        href={currentPage < lastPage ? `${basePath}?page=${currentPage + 1}` : '#'}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          currentPage >= lastPage
            ? 'text-gray-400 cursor-not-allowed pointer-events-none'
            : 'text-[#0a4d2e] hover:bg-[#0a4d2e]/10'
        }`}
        aria-disabled={currentPage >= lastPage}
      >
        Next →
      </Link>
    </nav>
  );
}
