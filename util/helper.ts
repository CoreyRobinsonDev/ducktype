import { promptList } from "./prompts";

export const getRandomPrompt = (category = "any"): string => {
  switch (category) {
    case "html": return promptList.html[Math.floor(Math.random() * promptList.html.length)];
    default:
      const keyIndex = Math.floor(Math.random() * Object.keys(promptList).length);
      const key = Object.keys(promptList)[keyIndex];
      // @ts-ignore
      return promptList[key][Math.floor(Math.random() * promptList.html.length)];
  }
}