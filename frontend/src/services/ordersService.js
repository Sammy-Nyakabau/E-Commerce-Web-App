import http from "./httpService";

const apiEndpoint = "/orders";

export function getMyOrders(id) {
  return http.get(`${apiEndpoint}/myorders/${id}`);
}
export function createOrder(user ,orderItems) {
  return http.post(`${apiEndpoint}`, { user, orderItems });
}
