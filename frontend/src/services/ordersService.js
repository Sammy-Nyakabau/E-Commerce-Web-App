import http from "./httpService";

const apiEndpoint = "/orders";

export function getMyOrders(id) {
  return http.get(`${apiEndpoint}/${id}`);
}
export function createOrder(user ,orderItems, itemsPrice) {
  return http.post(`${apiEndpoint}`, { user, orderItems, itemsPrice });
}
