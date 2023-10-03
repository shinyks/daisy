/**
 * Check if an element class has specific name
 * @param element The element to check
 * @param name Class name
 * @returns If the element contains that name then true, otherwise false
 */
export const hasClass = (element: HTMLElement, name: string): boolean => {
  return element.classList.contains(name);
};

/**
 * Check if an element class has specific option name
 * @param element The element to check
 * @param name Option class name
 * @returns If the element contains that name then true, otherwise false
 */
export const hasOptionClass = (element: HTMLElement, name: string): boolean => {
  return hasClass(element, `--${name}`);
};

/**
 * Add element class
 * @param element Element to add a class
 * @param name Class name
 */
export const addClass = (element: HTMLElement, name: string): void => {
  element.classList.add(name);
};

/**
 * Add element option class
 * @param element Element to add a option class
 * @param name Option class name
 */
export const addOptionClass = (element: HTMLElement, name: string): void => {
  addClass(element ,`--${name}`);
};

/**
 * Remove element class
 * @param element Element to remove a class
 * @param name Class name
 */
export const removeClass = (element: HTMLElement, name: string): void => {
  element.classList.remove(name);
};

/**
 * Remove element option class
 * @param element Element to remove a option class
 * @param name Option class name
 */
export const removeOptionClass = (element: HTMLElement, name: string): void => {
  removeClass(element ,`--${name}`);
};

/**
 * Set or reset class name
 * @param element Element to set class
 * @param name Class name
 * @param value Value to set or not
 */
export const setClass = (element: HTMLElement, name: string, value: boolean = true): void => {
  if (value) {
    addClass(element, name);
  } else {
    removeClass(element, name);
  }
};

/**
 * Set or reset option class name
 * @param element Element to set option class
 * @param name Option class name
 * @param value Value to set or not
 */
export const setOptionClass = (element: HTMLElement, name: string, value: boolean = true): void => {
  setClass(element, `--${name}`, value);
};

/**
 * Remove all class name by prefix
 * @param element Element to remove class
 * @param prefix Prefix for class name
 */
export const removeAllClass = (element: HTMLElement, prefix: string = ''): void => {
  for (let i = 0; i < element.classList.length; i++) {
    const className = element.classList[i];

    if (className.startsWith(prefix)) {
      removeClass(element, className);
    }
  }
};

/**
 * Remove all option class name
 * @param element Element to remove option class
 */
export const removeAllOptionClass = (element: HTMLElement): void => {
  removeAllClass(element, '--');
};
