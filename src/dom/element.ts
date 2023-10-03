export const get = (query: string, parentElement: HTMLElement): HTMLElement | null => {
  return (parentElement || document).querySelector(query);
};

export const getAll = (query: string, parentElement: HTMLElement): HTMLElement[] => {
  return Array.from((parentElement || document).querySelectorAll(query));
};

export const getById = (elementId: string, parentElement: HTMLElement): HTMLElement | null => {
  return get(`#${elementId}`, parentElement);
};

export const create = (tag: string = 'div', className: string = '', id: string = ''): HTMLElement => {
  const element = document.createElement(tag);

  if (id.length !== 0) {
    element.id = id;
  }

  if (className.length !== 0) {
    className.split(' ').forEach((name) => name.length !== 0 && element.classList.add(name));
  }

  return element;
};

export const append = (targetElement: HTMLElement, parentElement: HTMLElement, index?: number): void => {
  if (index === undefined) {
    (parentElement || document.body).appendChild(targetElement);
  } else {
    (parentElement || document.body).insertBefore(targetElement, parentElement.children[index]);
  }
};

export const insert = (targetElement: HTMLElement, index: number, parentElement: HTMLElement): void => {
  (parentElement || document.body).insertBefore(targetElement, parentElement.children[index]);
};

export const remove = (targetElement: HTMLElement): void => {
  targetElement.remove();
};

export const removeAllChild = (parentElement: HTMLElement): void => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};

export const getAttr = (element: HTMLElement, key: string): string | null => {
  return element.getAttribute(key);
};

export const setAttr = (element: HTMLElement, key: string, value: string): void => {
  element.setAttribute(key, value);
};

export const setText = (element: HTMLElement, value: string): void => {
  element.innerText = value;
};

export const setHtml = (element: HTMLElement, value: string): void => {
  element.innerHTML = value;
};

export const hasClass = (element: HTMLElement, name: string): boolean => {
  return element.classList.contains(name);
};

export const hasOptionClass = (element: HTMLElement, name: string): boolean => {
  return hasClass(element, `--${name}`);
};

export const addClass = (element: HTMLElement, name: string): void => {
  element.classList.add(name);
};

export const addOptionClass = (element: HTMLElement, name: string): void => {
  addClass(element ,`--${name}`);
};

export const removeClass = (element: HTMLElement, name: string): void => {
  element.classList.remove(name);
};

export const removeOptionClass = (element: HTMLElement, name: string): void => {
  removeClass(element ,`--${name}`);
};

export const setClass = (element: HTMLElement, name: string, value: boolean = true): void => {
  if (value) {
    addClass(element, name);
  } else {
    removeClass(element, name);
  }
};

export const setOptionClass = (element: HTMLElement, name: string, value: boolean = true): void => {
  setClass(element, `--${name}`, value);
};

export const removeAllClass = (element: HTMLElement, prefix: string = ''): void => {
  for (let i = 0; i < element.classList.length; i++) {
    const className = element.classList[i];

    if (className.startsWith(prefix)) {
      removeClass(element, className);
    }
  }
};

export const removeAllOptionClass = (element: HTMLElement): void => {
  removeAllClass(element, '--');
};

export const addStyle = (value: string): void => {
  if (!value || value.length === 0) {
    return;
  }

  const styles = getAll('style', document.head);

  for (const style of styles) {
    if (style.innerText === value) {
      return;
    }
  }

  const styleElement = create('style');

  setHtml(styleElement, value);
  append(styleElement, document.head);
};
