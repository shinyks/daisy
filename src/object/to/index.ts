import { is } from "../..";

/**
 * Convert to string
 * @param value Object
 * @returns Converted string
 */
export const string = (value: any): string => {
  if (!(is.object(value) || is.array(value))) {
    return '';
  }

  let plainValue = '';

  try {
    plainValue = JSON.stringify(value);
  } catch (error) {
    return '';
  }

  return plainValue;
};
