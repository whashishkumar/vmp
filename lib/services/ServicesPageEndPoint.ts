import { apiFetch } from '../api/fetcher';

export const ServicesPageEndPoint = {
  // /api/v1/page/vmp-finance
  getVmpFinance: () => {
    return apiFetch({
      endpoint: 'page/vmp-finance',
      cache: 'dynamic',
    });
  },
  // /api/v1/page/nuroai-doctor
  getNuroaiDoctor: () => {
    return apiFetch({
      endpoint: 'page/nuroai-doctor',
      cache: 'dynamic',
    });
  },
};
