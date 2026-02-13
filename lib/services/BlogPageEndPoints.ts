import { apiFetch } from '../api/fetcher';

export const BlogPageEndPoints = {
  getBlogPage: () => {
    return apiFetch({
      endpoint: 'posts',
      cache: 'dynamic',
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
