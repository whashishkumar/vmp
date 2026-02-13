import { apiFetch } from '../api/fetcher';

export const HomePageEndPoints = {
  getHomeHeroSection: () => {
    return apiFetch({
      endpoint: 'section/home-hero-section',
      cache: 'dynamic',
    });
  },

  getHomeAboutSection: () => {
    return apiFetch({
      endpoint: 'section/home-about-section',
      cache: 'dynamic',
    });
  },
  getHomeEcosystemSection: () => {
    return apiFetch({
      endpoint: 'section/home-ecosystem-section',
      cache: 'dynamic',
    });
  },

  getHomeWhySection: () => {
    return apiFetch({
      endpoint: 'section/home-why-section',
      cache: 'dynamic',
    });
  },

  getHomeEcosystemImageSection: () => {
    return apiFetch({
      endpoint: 'section/home-ecosystem-image-section',
      cache: 'dynamic',
    });
  },

  getHomeVirtualSection: () => {
    return apiFetch({
      endpoint: 'section/home-virtual-section',
      cache: 'dynamic',
    });
  },

  getHomeBlogSection: () => {
    return apiFetch({
      endpoint: 'section/home-blog-section',
      cache: 'dynamic',
    });
  },

  getHomeFaqSection: () => {
    return apiFetch({
      endpoint: 'section/home-faq-section',
      cache: 'dynamic',
    });
  },
};
