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

test("it returns the request number of words separated by spaces", (t) => {
  const [three, twelve] = [generateSentence(3), generateSentence(12)];
  t.is(three.split(" ").length, 3);
  t.is(twelve.split(" ").length, 12);
});

test("it always ends with a period", (t) => {
  const [three, twelve] = [generateSentence(3), generateSentence(12)];
  t.is(three.slice(-1), ".");
  t.is(twelve.slice(-1), ".");
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
