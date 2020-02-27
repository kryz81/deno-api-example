import { Response } from "https://deno.land/x/oak/mod.ts";

export default ({ response }: { response: Response }) => {
  response.status = 404;
  response.body = { msg: "Not Found" };
};
