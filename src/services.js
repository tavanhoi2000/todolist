import axios from "axios";
export const url = "https://jsonplaceholder.typicode.com/users/";

export function getAllUsers() {
  return axios.get(url);
}
export function handleDelete(id) {
  return axios.delete(url + id);
}
export function addUser(name) {
  return axios.post(url, { name: name });
}
export function handleUpdate(id, item) {
  return axios.put(url + id, { name: item.name });
}
