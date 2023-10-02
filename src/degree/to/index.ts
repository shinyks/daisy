import { is } from "../..";

/**
 * Convert degree to radian
 * @param degree Degree angle value
 * @returns Radian value
 */
export const radian = (degree: number): number => {
  return (degree * Math.PI) / 180;
};

/**
 * Convert to string
 * @param value Degree value
 * @returns Degree string value
 */
export const string = (value: number | string): string => {
  if (is.degString(value)) {
    return value as string;
  }

  return is.number(value) || is.numericString(value) ? `${value}deg` : '0deg';
};
