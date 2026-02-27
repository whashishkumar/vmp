'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';

const CategoriesCard = ({
  categoriesData,
  fetchCategoryBlogs,
}: {
  categoriesData?: { data?: Array<{ id: number; name: string; slug?: string; count: number }> };
  fetchCategoryBlogs?: (slug?: string) => Promise<any>;
}) => {
  const categories = categoriesData?.data ?? [];

  const handleClickCategory = async (slug?: string) => {
    if (fetchCategoryBlogs) {
      await fetchCategoryBlogs(slug);
    }
  };

  return (
    <div className="max-w-sm w-full bg-[#fdfaf6] rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-black mb-4">Categories</h2>
      <div className="h-px bg-gray-200 mb-2" />
      <div className="space-y-4">
        {categories?.map((item) => (
          <div
            onClick={() => handleClickCategory(item.slug)}
            key={item.id}
            className="flex items-center justify-between py-2 border-b border-gray-200 last:border-none cursor-pointer"
          >
            <span className="text-gray-800 font-medium">{item.name}</span>
            <span className="text-gray-500 font-semibold">({item.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RecentPostsCard = ({
  recentPostsData,
}: {
  recentPostsData?: {
    recentPosts?: Array<{ id: number; title: string; slug?: string; date: string; image: string }>;
  };
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

const TagsCard = ({ tags, fetchTagBlogs }: any) => {
  const handleClickTag = async (slug?: string) => {
    if (fetchTagBlogs) {
      await fetchTagBlogs(slug);
    }
  };
  return (
    <div className="bg-[#fdfaf6] rounded-2xl p-6 w-full max-w-md ">
      <h3 className="text-xl font-semibold text-[#1f2937] mb-4">Tags</h3>
      <div className="flex flex-wrap gap-3">
        {tags?.map((tag: any, i: number) => (
          <span
            key={i}
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
            onClick={() => handleClickTag(tag.slug)}
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function SideBar({
  recentPostsData,
  categoriesData,
  fetchCategoryBlogs,
  tags,
  fetchTagBlogs,
}: {
  recentPostsData?: any;
  categoriesData?: any;
  fetchCategoryBlogs?: (slug?: string) => Promise<any>;
  tags?: any;
  fetchTagBlogs?: (slug?: string) => Promise<any>;
}) {
  const tagsData = tags?.data ?? [];
  return (
    <div className="space-y-6 pb-12">
      <RecentPostsCard recentPostsData={recentPostsData} />
      <CategoriesCard categoriesData={categoriesData} fetchCategoryBlogs={fetchCategoryBlogs} />
      <TagsCard tags={tagsData} fetchTagBlogs={fetchTagBlogs} />
    </div>
  );
}
