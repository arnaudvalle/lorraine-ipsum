import test from "ava";
import { generateSentence } from "./index";

const errorMacro = test.macro((t, input: number, expected: string) => {
  const error = t.throws(
    () => {
      generateSentence(input);
    },
    { instanceOf: TypeError },
  );

  t.is(error.message, expected);
});

test("it returns 3 words separated by a space when asked for 3 words", (t) => {
  const result = generateSentence(3);
  t.is(result.split(" ").length, 3);
});

test(
  "fails when first parameter is smaller than 0",
  errorMacro,
  -1,
  "numWords must be greater than 0",
);

test(
  "fails when first parameter is 0",
  errorMacro,
  0,
  "numWords must be greater than 0",
);
