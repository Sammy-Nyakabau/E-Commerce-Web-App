import http from "./httpService";

const apiEndpoint = "/wishlist";

export function getWishlist(id) {
  return http.get(`${apiEndpoint}/mywishlist/${id}`);
}

export function addWishlist(user ,wishlistItems) {
  return http.post(`${apiEndpoint}`, { user, wishlistItems });
}

export function deleteWishlist(id) {
  return http.delete(`${apiEndpoint}/${id}`);
}
