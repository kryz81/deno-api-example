import { test } from "https://deno.land/std/testing/mod.ts";
import {
  assertEquals,
  assertMatch
} from "https://deno.land/std/testing/asserts.ts";

import createId from "./createId.ts";

test({
  name: "it returns a ID in uuid v4 format",
  fn: () => {
    // when
    const id = createId();

    // then
    assertEquals(id.length, 36);
    assertMatch(id, /^[a-f0-9\-]+$/);
  }
});
