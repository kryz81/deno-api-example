import { Response } from "https://deno.land/x/oak/mod.ts";
import { getUsers } from "../services/users.ts";

export default async ({ response }: { response: Response }) => {
  response.body = await getUsers();
};
