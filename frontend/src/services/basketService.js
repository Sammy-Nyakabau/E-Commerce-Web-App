import http from "./httpService";

const apiEndpoint = "/basket";

export function getBasket(id) {
  return http.get(`${apiEndpoint}/mybasket/${id}`);
}

export function addBasket(user ,basketItems) {
  return http.post(`${apiEndpoint}`, { user, basketItems });
}

export function deleteBasket(id) {
  return http.delete(`${apiEndpoint}/${id}`);
}
