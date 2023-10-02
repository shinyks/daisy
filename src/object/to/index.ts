import { is } from "../..";

export const string = (value: any): string => {
  if (!is.object(value)) {
    return '';
  }

  let plainValue = '';

  try {
    plainValue = JSON.stringify(value);
  } catch (error) {
    return '';
  }

  return plainValue;
};
