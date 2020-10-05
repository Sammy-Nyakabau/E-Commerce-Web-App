  
import http from "./httpService";

const apiEndpoint = "/categories";

export function getHelicopters() {
  return http.get(`${apiEndpoint}/helicopters`);
}
export function getAircraft() {
  return http.get(`${apiEndpoint}/aircraft`);
}
export function getJetLiners() {
  return http.get(`${apiEndpoint}/jet-liners`);
}
export function getUnmannedAerialSystems() {
  return http.get(`${apiEndpoint}/unmanned-aerial-systems`);
}