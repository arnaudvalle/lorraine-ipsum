import test from "ava";
import { generateWords } from "./index";

const errorMacro = test.macro((t, input: number, expected: string) => {
  const error = t.throws(
    () => {
      generateWords(input);
    },
    { instanceOf: TypeError },
  );

  t.is(error.message, expected);
});

test("it returns 3 words separated by a space when asked for 3 words", (t) => {
  const result = generateWords(3);
  t.is(result.split(" ").length, 3);
});

test(
  "fails when first parameter is smaller than 0",
  errorMacro,
  -1,
  "numberOfWords must be greater than 0",
);

test(
  "fails when first parameter is 0",
  errorMacro,
  0,
  "numberOfWords must be greater than 0",
);
