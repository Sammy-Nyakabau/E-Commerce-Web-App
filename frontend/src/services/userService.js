import http from "./httpService";

const apiEndpoint = "/users";

export function updateUser(id, username, email, shippingAddress) {
  return http.put(`${apiEndpoint}/${id}`, {username, email, shippingAddress});
}

export function getUser() {
  return http.get(`${apiEndpoint}/me`);
}
