import { is, object, string } from "../..";

/**
 * Get localstorage value with key (saved value must be an JSON string)
 * @param key Localstorage key
 * @returns Saved object
 */
export const get = (key: string): any => {
  if (!is.string(key)) {
    return null;
  }

  const plainValue = localStorage.getItem(key);

  if (plainValue) {
    return string.to.object(plainValue);
  }

  return null;
};

/**
 * Set localstorage value with key
 * @param key Localstorage key
 * @param value Value to save
 */
export const set = (key: string, value: any): void => {
  if (!is.string(key)) {
    return;
  }

  if (!is.object(value)) {
    return;
  }

  const plainValue = object.to.string(value);

  if (plainValue.length !== 0) {
    localStorage.setItem(key, plainValue);
  }
};

/**
 * Remove localstorage with key
 * @param key Localstorage key
 */
export const remove = (key: string): void => {
  if (!is.string(key)) {
    return;
  }

  localStorage.removeItem(key);
};

/**
 * Remove all localstorage data
 */
export const removeAll = (): void => {
  for (const key of Object.keys(localStorage)) {
    localStorage.removeItem(key);
  }
};
