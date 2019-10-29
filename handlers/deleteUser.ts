import { deleteUser } from "../services/users.ts";

export default async ({ params, response }) => {
  const userId = params.id;

  if (!userId) {
    response.status = 400;
    response.body = { msg: "Invalid user id" };
    return;
  }

  try {
    await deleteUser(userId);
    response.body = { msg: "User deleted" };
  } catch (err) {
    response.status = 500;
    response.body = { msg: err.message };
  }
};
