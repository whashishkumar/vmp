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

  // /api/v1/page/vmp-insurance
  getVmpInsurance: () => {
    return apiFetch({
      endpoint: 'page/vmp-insurance',
      cache: 'dynamic',
    });
  },
  // /api/v1/page/nuroai-student
  getNuroaiStudent: () => {
    return apiFetch({
      endpoint: 'page/nuroai-student',
      cache: 'dynamic',
    });
  },

  // /api/v1/page/nurovet
  getNurovet: () => {
    return apiFetch({
      endpoint: 'page/nurovet',
      cache: 'dynamic',
    });
  },
  // /api/v1/page/vmp-marketing
  getVmpMarketing: () => {
    return apiFetch({
      endpoint: 'page/vmp-marketing',
      cache: 'dynamic',
    });
  },
};
