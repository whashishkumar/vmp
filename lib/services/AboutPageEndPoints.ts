import { apiFetch } from '../api/fetcher';

export const AboutPageEndPoints = {
  // /api/v1/page/about
  getAboutPage: () => {
    return apiFetch({
      endpoint: 'page/about',
      cache: 'dynamic',
    });
  },
};
