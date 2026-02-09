import { apiFetch } from "../api/fetcher";

export const CommonPageEndPoints = () => {
  //api/header-menu
 const headerMenu = () => {
    return apiFetch({
      endpoint: '',
      cache: 'static',
    });
  }

//footer-menu
const footerMenu = () => {
  return apiFetch({
    endpoint: '',
    cache: 'static',
  });
  }
}