/**
 * Convert base64 string to plain string
 * @param value Base64 string
 * @returns Plain string
 */
export const plain = (value: string): string => {
  const binaryValue = atob(value);
  const encodedArray = Uint8Array.from(binaryValue, (m) => m.codePointAt(0) as number);

  return new TextDecoder().decode(encodedArray);
};
