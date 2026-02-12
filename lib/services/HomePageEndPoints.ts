import { apiFetch } from "../api/fetcher";

export const HomePageEndPoints = () => {
  //api/header-menu
 const getHeroBanner = () => {
    return apiFetch({
      endpoint: '',
      cache: 'dynamic',
    });
  }
}