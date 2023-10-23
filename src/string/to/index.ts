import { is } from "../..";

/**
 * Convert to boolean
 * @param value Value to change
 * @returns Converted value
 */
export const boolean = (value: any): boolean => is.string(value) ? (value.toLowerCase() === 'true' ? true : false) : (value ? true : false);

/**
 * Convert to integer
 * @param value Value to change
 * @param radix Base of the number
 * @returns Converted value
 */
export const int = (value: any, radix: number = 10): number => is.number(value) || is.numericString(value) ? Number.parseInt(value, radix) : 0;

/**
 * Convert to floating point number
 * @param value Value to change
 * @returns Converted value
 */
export const float = (value: any): number => is.number(value) || is.numericString(value) ? Number.parseFloat(value) : 0;

/**
 * Convert to object
 * @param value Value to change
 * @returns Converted object
 */
export const object = (value: string): any => {
  if (!is.string(value)) {
    return null;
  }

  let objectValue = null;

  try {
    objectValue = JSON.parse(value);
  } catch (error) {
    return null;
  }

  return objectValue;
};

/**
 * Convert to base64 string
 * @param value Value to change
 * @returns Base64 string
 */
export const base64 = (value: string): string => {
  const encodedArray = Array.from(new TextEncoder().encode(value));
  const binaryValue = String.fromCodePoint(...encodedArray);

  return btoa(binaryValue);
};
