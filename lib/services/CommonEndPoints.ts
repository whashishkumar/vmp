import { apiFetch } from "../api/fetcher";

export const CommonPageEndPoints =  {
    navBar: () => {
    return apiFetch({
      endpoint: 'navigation-menu',
      cache: 'no-store',
    });
  },


}