import { Router } from "https://deno.land/x/oak/mod.ts";

import getUsers from "./handlers/getUsers.ts";
import getUserDetails from "./handlers/getUserDetails.ts";
import createUser from "./handlers/createUser.ts";
import updateUser from "./handlers/updateUser.ts";
import deleteUser from "./handlers/deleteUser.ts";

const router = new Router();

router
  .get("/users", getUsers)
  .get("/users/:id", getUserDetails)
  .post("/users", createUser)
  .put("/users/:id", updateUser)
  .delete("/users/:id", deleteUser);

export default router;
