import { IMAGE_URL_PREFIX } from "./constants";
const colors = ["42a5f5", "ba68c8", "ef5350", "ff9800", "4caf50"];

export const randomImageUrl = (size: number) => {
  const index = Math.floor(Math.random() * colors.length);
  const color = colors[index];

  return `${IMAGE_URL_PREFIX}/${size}/${color.substring(
    0,
    3
  )}/${color.substring(3, 6)}`;
};
