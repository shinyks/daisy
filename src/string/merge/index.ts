import { remove } from "..";

/**
 * Merge url
 * @param base Base url
 * @param pathList Path list
 * @returns  Url string
 */
export const url = (base: string, ...pathList: string[]): string => {
  let baseUrl = remove.trailingSlash(base);

  for (const path of pathList) {
    const cleanPath = remove.beginningSlash(path);

    baseUrl = remove.trailingSlash(`${baseUrl}/${cleanPath}`);
  }

  return baseUrl;
};

/**
 * Merge string
 * @param stringA First string
 * @param stringB Second string
 * @param delimeter Delimeter
 * @returns Merged string
 */
export const withDelimeter = (stringA: string, stringB: string, delimeter = ' '): string => {
  let resultString = '';

  if (stringA) {
    resultString += `${stringA}`;
  }

  if (stringA && stringB) {
    resultString += delimeter;
  }

  if (stringB) {
    resultString += `${stringB}`;
  }

  return resultString;
};
