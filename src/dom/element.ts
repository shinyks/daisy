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
