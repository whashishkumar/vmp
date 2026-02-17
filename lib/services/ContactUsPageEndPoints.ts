import { apiFetch, apiPost } from '../api/fetcher';

export const ContactUsPageEndPoints = {
  // /api/v1/page/contact-us
  getContactUsPage: () => {
    return apiFetch({
      endpoint: 'page/contact-us',
      cache: 'dynamic',
    });
  },
  // POST /api/v1/contact-form
  submitContactForm: (data: { name: string; phone: string; email: string; subject: string; message: string }) => {
    return apiPost('contact-form', data);
  },
};
