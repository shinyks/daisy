import { is } from "../..";

/**
 * Convert to string
 * @param value Value to change
 * @returns Converted string
 */
export const string = (value: number): string => `${value}`;

/**
 * To HTML px format
 * @param value Value to change
 * @returns Converted string
 */
export const pxString = (value: any): string => {
  if (is.pxString(value)) {
    return value as string;
  }

  return is.number(value) || is.numericString(value) ? `${value}px` : '0px';
};

/**
 * Convert to padded string
 * @param value Value to pad
 * @param totalLength Total length when the pad is added
 * @param fillString The string to pad the current string with
 * @returns Converted string
 */
export const padString = (value: number | string, totalLength: number = 2, fillString: string = '0'): string => {
  return is.number(value) || is.string(value) ? `${value}`.padStart(totalLength, fillString) : '';
};
