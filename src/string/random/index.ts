/**
 * Get random alphabet
 * @param caseSensitive Determining whether to include uppercase characters
 * @returns Random alphabet letter
 */
export const letter = (caseSensitive: boolean = false): string => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (caseSensitive) {
    alphabet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  return alphabet[Math.floor(Math.random() * alphabet.length)];
};
