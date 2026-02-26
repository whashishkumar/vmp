import { apiFetch } from '../api/fetcher';

export const ServicesPageEndPoint = {
  // /api/v1/page/vmp-finance
  getVmpFinance: () => {
    return apiFetch({
      endpoint: 'page/vmp-finance',
      cache: 'dynamic',
    });
  },
};
