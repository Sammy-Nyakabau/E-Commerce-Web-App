import http from "./httpService";

const apiEndpoint = "/orders";

export function getOrders() {
  return http.get(apiEndpoint);
}
export function getMyOrders(id) {
  return http.get(`${apiEndpoint}/${id}`);
}