import { apiFetch } from '../api/fetcher';

export const CommonPageEndPoints = {
  navBar: () => {
    return apiFetch({
      endpoint: 'navigation-menu',
      cache: 'no-store',
    });
  },

  // /api/v1/footer-menu
  footerMenu: () => {
    return apiFetch({
      endpoint: 'footer-menu',
      cache: 'no-store',
    });
  },
};
