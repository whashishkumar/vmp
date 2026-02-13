import { apiFetch } from '../api/fetcher';

export const ServicesPageEndPoints = {
  // /api/1v / page / services;,
  getServicesPage: () => {
    return apiFetch({
      endpoint: 'page/services',
      cache: 'dynamic',
    });
  },
};
