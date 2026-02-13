import { apiFetch } from '../api/fetcher';

export const ContactUsPageEndPoints = {
  // /api/v1/page/contact-us
  getContactUsPage: () => {
    return apiFetch({
      endpoint: 'page/contact-us',
      cache: 'dynamic',
    });
  },
};
