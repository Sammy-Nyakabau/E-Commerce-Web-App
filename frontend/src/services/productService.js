import http from "./httpService";

const apiEndpoint = "/products";

export function getProducts() {
  return http.get(apiEndpoint);
}

