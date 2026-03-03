'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';

const CategoriesCard = ({
  categoriesData,
  onItemClick,
}: {
  categoriesData?: { data?: Array<{ id: number; name: string; slug?: string; count: number }> };
  onItemClick?: () => void;
}) => {
  const categories = categoriesData?.data ?? [];

  return (
    <div className="max-w-sm w-full bg-[#fdfaf6] rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-black mb-4">Categories</h2>
      <div className="h-px bg-gray-200 mb-2" />
      <div className="space-y-4">
        {categories?.map((item) => (
          <Link
            href={`/blog?category=${item.slug}`}
            key={item.id}
            onClick={onItemClick}
            className="flex items-center justify-between py-2 border-b border-gray-200 last:border-none cursor-pointer hover:opacity-80 transition"
          >
            <span className="text-gray-800 font-medium">{item.name}</span>
            <span className="text-gray-500 font-semibold">({item.count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

const RecentPostsCard = ({
  recentPostsData,
  onItemClick,
}: {
  recentPostsData?: {
    recentPosts?: Array<{ id: number; title: string; slug?: string; date: string; image: string }>;
  };
  onItemClick?: () => void;
}) => {
  const posts = (recentPostsData?.recentPosts ?? []).slice(0, 3);
  return (
    <div className="max-w-sm w-full bg-[#fdfaf6] rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-black mb-4">Recent Posts</h2>
      <div className="h-px bg-gray-200 mb-4" />
      <div className="space-y-5">
        {posts?.map((post) => (
          <Link
            key={post.id}
            href={post.slug ? `/blog/${post.slug}` : '#'}
            onClick={onItemClick}
            className="flex items-start gap-4 cursor-pointer hover:opacity-80 transition"
          >
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 font-semibold leading-snug line-clamp-2">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-green-600 text-sm mt-1">
                <FiCalendar size={16} />
                <span className="text-gray-500">{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const TagsCard = ({ tags, onItemClick }: any) => {
  return (
    <div className="bg-[#fdfaf6] rounded-2xl p-6 w-full max-w-md ">
      <h3 className="text-xl font-semibold text-[#1f2937] mb-4">Tags</h3>
      <div className="flex flex-wrap gap-3">
        {tags?.map((tag: any, i: number) => (
          <Link
            key={i}
            href={`/blog?tag=${tag.slug}`}
            onClick={onItemClick}
            className="
              px-4 py-2
              text-sm text-[#374151]
              bg-white
              border border-[#e5e7eb]
              rounded-full
              hover:bg-[#00522C]
              hover:text-white
              transition
              cursor-pointer
            "
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function SideBar({
  recentPostsData,
  categoriesData,
  tags,
  onItemClick,
}: {
  recentPostsData?: any;
  categoriesData?: any;
  tags?: any;
  onItemClick?: () => void;
}) {
  const tagsData = tags?.data ?? [];
  return (
    <div className="space-y-6 pb-12 ">
      <RecentPostsCard recentPostsData={recentPostsData} onItemClick={onItemClick} />
      <CategoriesCard categoriesData={categoriesData} onItemClick={onItemClick} />
      <TagsCard tags={tagsData} onItemClick={onItemClick} />
    </div>
  );
}
