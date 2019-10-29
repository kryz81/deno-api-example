import { getUser } from "../services/users.ts";

export default async ({ params, response }) => {
  const userId = params.id;

  if (!userId) {
    response.status = 400;
    response.body = { msg: "Invalid user id" };
    return;
  }

  try {
    const foundUser = await getUser(userId);
    if (!foundUser) {
      response.status = 404;
      response.body = { msg: `User with ID ${userId} not found` };
      return;
    }

    response.body = await getUser(userId);
  } catch (err) {
    response.status = 500;
    response.body = { msg: err.message };
  }
};
