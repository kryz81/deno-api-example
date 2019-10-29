import { getUsers } from "../services/users.ts";

export default async ({ response }) => {
  response.body = await getUsers();
};
