'use server';

import { BlogPageEndPoints } from '@/lib/services/BlogPageEndPoints';

export async function fetchCategoryBlogs(slug?: string) {
  try {
    const res = await BlogPageEndPoints.getCategoriesFiltersByCategory(slug);
    return res?.data ?? [];
  } catch (err) {
    console.error('failed to fetch category blogs', err);
    return [];
  }
}

export async function fetchTagBlogs(slug?: string) {
  try {
    const res = await BlogPageEndPoints.getTagsFiltersByTag(slug);
    return res?.data ?? [];
  } catch (err) {
    console.error('failed to fetch tag blogs', err);
    return [];
  }
}
