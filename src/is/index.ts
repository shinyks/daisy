/**
 * Check if value is an array
 * @param value Value to verify
 * @returns Verify result
 */
export const array = (value: any): boolean => Array.isArray(value);

/**
 * Check if value is an object
 * @param value Value to verify
 * @returns Verify result
 */
export const object = (value: any): boolean => Object.prototype.toString.call(value).includes('Object');

/**
 * Check if value is a string
 * @param value Value to verify
 * @returns Verify result
 */
export const string = (value: any): boolean => typeof value === 'string';

/**
 * Check if value is a number
 * @param value Value to verify
 * @returns Verify result
 */
export const number = (value: any): boolean => typeof value === 'number';

/**
 * Check if value is a function
 * @param value Value to verify
 * @returns Verify result
 */
export const func = (value: any): boolean => typeof value === 'function';

/**
 * Check if value is a undefined
 * @param value Value to verify
 * @returns Verify result
 */
export const und = (value: any): boolean => typeof value === 'undefined';

/**
 * Check if value is a null
 * @param value Value to verify
 * @returns Verify result
 */
export const nil = (value: any): boolean => und(value) || value === null;

/**
 * Check if value is a numeric string
 * @param value Value to verify
 * @returns Verify result
 */
export const numericString = (value: any): boolean => string(value) && !Number.isNaN(Number.parseInt(value));

/**
 * Check if value is a number with suffix
 * @param value Value to verify
 * @param suffix Suffix
 * @returns Verify result
 */
export const numericSuffixString = (value: any, suffix: string): boolean => {
  if (!string(value)) {
    return false;
  }

  const chunks = value.split(suffix);

  if (chunks.length !== 2 || chunks[1].length !== 0 || !numericString(chunks[0])) {
    return false;
  }

  return true;
};

/**
 * Check if value is a HTML px string
 * @param value Value to verify
 * @returns Verify result
 */
export const pxString = (value: any): boolean => {
  return numericSuffixString(value, 'px');
};

/**
 * Check if value is a HTML deg string
 * @param value Value to verify
 * @returns Verify result
 */
export const degString = (value: any): boolean => {
  return numericSuffixString(value, 'deg');
};

/**
 * Check if value is a HTML rad string
 * @param value Value to verify
 * @returns Verify result
 */
export const radString = (value: any): boolean => {
  return numericSuffixString(value, 'rad');
};
