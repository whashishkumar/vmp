import { apiFetch } from '../api/fetcher';

export const BlogPageEndPoints = {
  getBlogPage: (page = 1, perPage = 8) => {
    return apiFetch({
      endpoint: 'posts',
      params: { page, per_page: perPage },
      cache: 'dynamic',
    });
  },
  // GET /api/v1/posts/[slug]
  getPostBySlug: (slug: string) => {
    return apiFetch({
      endpoint: `posts/${slug}`,
      cache: 'dynamic',
      throw404: true,
    });
  },
  // /api/v1/categories
  getCategories: () => {
    return apiFetch({
      endpoint: 'categories',
      cache: 'dynamic',
    });
  },
  // api/v1/recent-posts
  getRecentPosts: () => {
    return apiFetch({
      endpoint: 'recent-posts',
      cache: 'dynamic',
    });
  },

  // /api/v1/categories/filters
  getCategoriesFilters: () => {
    return apiFetch({
      endpoint: 'categories/filters',
      cache: 'dynamic',
    });
  },
  // /api/v1/tags/filters
  getTagsFilters: () => {
    return apiFetch({
      endpoint: 'tags/filters',
      cache: 'dynamic',
    });
  },
  // api/v1/posts/filters
  getPostsFilters: () => {
    return apiFetch({
      endpoint: 'posts/filters',
      cache: 'dynamic',
    });
  },
};
