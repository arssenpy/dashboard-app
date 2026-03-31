import { api } from "../../../shared/api/users";

export function getUsers() {
  return api.get("/users");
}
