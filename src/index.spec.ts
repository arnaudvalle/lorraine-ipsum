import test from "ava";
import { generateLorraineIpsum } from "./index";

test("it returns 3 words separated by a space when asked for 3 words", (t) => {
  const result = generateLorraineIpsum(3);
  t.is(result.split(" ").length, 3);
});

test("fails when first parameter is smaller than 0", (t) => {
  const error = t.throws(
    () => {
      generateLorraineIpsum(-1);
    },
    { instanceOf: TypeError },
  );

  t.is(error.message, "numberOfWords must be greater than 0");
});
