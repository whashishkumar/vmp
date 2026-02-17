import { apiPost } from '../api/fetcher';

export const NewsletterEndPoints = {
  subscribe: (email: string) => {
    return apiPost('newsletter', { email });
  },
};
