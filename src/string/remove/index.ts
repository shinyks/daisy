/**
 * Remove slash at the beginning of string
 * @param value Value to remove slash
 * @returns String with slash removed
 */
export const beginningSlash = (value: string): string => value.replace(/^\/+/, '');

/**
 * Remove slash at the end of string
 * @param value Value to remove slash
 * @returns String with slash removed
 */
export const trailingSlash = (value: string): string => value.replace(/\/+$/, '');

/**
 * Remove white spaces
 * @param value Value to remove white spaces
 * @returns String with no white spaces
 */
export const whiteSpaces = (value: string): string => value.replace(/\s/g, '');
