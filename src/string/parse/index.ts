import { is, string } from "../..";

/**
 * Parse string('width=768, height=1024') to object({ width: 768, heidht: 1024 })
 * @param original String to parse
 * @param separator1 Element delimiter
 * @param separator2 Pair delimiter
 * @returns Parsed object
 */
export const toDictionary = (original: string, separator1: string, separator2: string): any => {
  if (!is.string(original) || !is.string(separator1) || !is.string(separator2)) {
    return {};
  }

  const chunks = original.split(separator1);
  const resultObject: any = {};

  for (const chunk of chunks) {
    const pair = chunk.split(separator2);
    const key = pair[0].trim();
    let value: number | string = pair[1].trim();

    if (is.numericString(value)) {
      value = string.to.int(value);
    }

    resultObject[key] = value;
  }

  return resultObject;
};

/**
 * Parse JSON Web Token
 * @param token JWT string
 * @returns JWT object
 */
export const jwt = (token: string): any => {
  if (!is.string(token)) {
    return null;
  }

  try {
    const base64Payload = token.split('.')[1];
    const base64String = base64Payload.replace(/-/g, '+').replace(/_/g, '/');
    const byteString = window.atob(base64String);
    const encodedUriString = byteString.split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('');
    const decodedUriString = decodeURIComponent(encodedUriString);

    return JSON.parse(decodedUriString);
  } catch {
    return null;
  }
};
