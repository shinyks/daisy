import { is } from "../..";

/**
 * Get random number in range
 * @param min Inclusive
 * @param max exclusive
 * @returns Random number
 */
export const range = (min: number, max: number): number => {
  if (!is.number(min) || !is.number(max)) {
    return 0;
  }

  return Math.floor(Math.random() * (max - min) + min);
};
