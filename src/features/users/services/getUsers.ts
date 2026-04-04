import { usersApi } from "../../../shared/api/users";

export function getUsers() {
  return usersApi.get("/users");
}
