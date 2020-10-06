import http from "./httpService";

const apiEndpoint = "/users";

export function updateUser(id) {
  return http.put(`${apiEndpoint}/${id}`);
}
