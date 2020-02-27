import { Request, Response } from "https://deno.land/x/oak/mod.ts";
import { updateUser } from "../services/users.ts";

export default async ({
  params,
  request,
  response
}: {
  params: any;
  request: Request;
  response: Response;
}) => {
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

  await updateUser(userId, { name, role, jiraAdmin });

  response.body = { msg: "User updated" };
};
