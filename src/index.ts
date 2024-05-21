import { words } from "./words";

export const generateLorraineIpsum = (numberOfWords: number) => {
  // Select random words from the array
  const randomWords: string[] = [];

  for (let i = 0; i < numberOfWords; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(words[randomIndex]);
  }

  // Join the selected words back into a string
  const text = randomWords.join(" ");

  // Easy capitalizeFirstLetter thanks to https://stackoverflow.com/a/1026087/1300306
  return text.charAt(0).toUpperCase() + text.slice(1);
};
