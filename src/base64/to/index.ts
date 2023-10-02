/**
 * Convert base64 string to plain string
 * @param value Base64 string
 * @returns Plain string
 */
export const plain = (value: string): string => {
  return decodeURIComponent(
    atob(value)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );
};
