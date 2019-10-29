import { getUsers } from "../services/users.ts";

export default async ({ response }) => {
  try {
    response.body = await getUsers();
  } catch (err) {
    response.status = 500;
    response.body = { msg: err.message };
  }
};
