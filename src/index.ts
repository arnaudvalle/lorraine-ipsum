import { words } from "./words";

export const generateSentence = (numWords: number) => {
  if (numWords <= 0) {
    throw new TypeError("numWords must be greater than 0");
  }

  // Select random words from the array of available words
  const randomWords: string[] = [];

  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(words[randomIndex]);
  }

  // Join the selected words back into a string
  const text = randomWords.join(" ");

  // Easy capitalizeFirstLetter thanks to https://stackoverflow.com/a/1026087/1300306
  return text.charAt(0).toUpperCase() + text.slice(1);
};
