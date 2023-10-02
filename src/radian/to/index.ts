import { is } from "../..";

/**
 * Convert radian to degree
 * @param radian Radian angle value
 * @returns Degree value
 */
export const degree = (radian: number): number => {
  return radian * (180 / Math.PI);
};

/**
 * Convert to string
 * @param value Radian value
 * @returns Radian string value
 */
export const string = (value: number | string): string => {
  if (is.radString(value)) {
    return value as string;
  }

  return is.number(value) || is.numericString(value) ? `${value}rad` : '0rad';
};
