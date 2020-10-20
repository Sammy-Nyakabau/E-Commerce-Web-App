import http from "./httpService";

const apiEndpoint = "/products";

export function getProducts() {
  return http.get(apiEndpoint);
}

export function updateProduct(id, numberOfReviews, rating) {
  return http.put(`${apiEndpoint}/${id}`, {numberOfReviews, rating});
}

