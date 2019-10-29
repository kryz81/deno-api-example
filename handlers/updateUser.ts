import { updateUser } from "../services/users.ts";

export default async ({ params, request, response }) => {
  const userId = params.id;

  if (!userId) {
    response.status = 400;
    response.body = { msg: "Invalid user id" };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }

  const {
    value: { name, role, jiraAdmin }
  } = await request.body();

  try {
    await updateUser(userId, { name, role, jiraAdmin });
    response.body = { msg: "User updated" };
  } catch (err) {
    response.status = 500;
    response.body = { msg: err.message };
  }
};
