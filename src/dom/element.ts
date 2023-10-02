import { Point, Size, number, string } from "..";

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

export const getCssSize = (element: HTMLElement): Size => {
  return new Size(string.to.int(element.style.width), string.to.int(element.style.height));
};

export const setCssSize = (element: HTMLElement, width?: number | null, height?: number | null): void => {
  element.style.width = (width === undefined || width === null) ? '' : number.to.pxString(width);
  element.style.height = (height === undefined || height === null) ? '' : number.to.pxString(height);
};

export const getCssPoint = (element: HTMLElement): Point => {
  return new Point(string.to.int(element.style.left), string.to.int(element.style.top));
};

export const setCssPoint = (element: HTMLElement, x?: number | null, y?: number | null): void => {
  element.style.left = (x === undefined || x === null) ? '' : number.to.pxString(x);
  element.style.top = (y === undefined || y === null) ? '' : number.to.pxString(y);
};

export const setCssScale = (element: HTMLElement, zoomRate: number): void => {
  const scale = `scale(${zoomRate}, ${zoomRate})`;
  const style = element.style as any;

  style.webkitTransform = scale;
  style.msTransform = scale;
  style.transform = scale;
};

export const setAbsolute = (element: HTMLElement, top?: number | null, right?: number | null, bottom?: number | null, left?: number | null): void => {
  element.style.position = 'absolute';
  element.style.top = (top === undefined || top === null) ? '' : number.to.pxString(top);
  element.style.right = (right === undefined || right === null) ? '' : number.to.pxString(right);
  element.style.bottom = (bottom === undefined || bottom === null) ? '' : number.to.pxString(bottom);
  element.style.left = (left === undefined || left === null) ? '' : number.to.pxString(left);
};

export const setCss = (element: HTMLElement, key: string, value: string): void => {
  const style = element.style as any;

  style[key] = value;
};

export const getComputedPoint = (element: HTMLElement): Point => {
  const computedStyle = window.getComputedStyle(element);
  const x = string.to.float(computedStyle.left);
  const y = string.to.float(computedStyle.top);

  return new Point(x, y);
};

export const getComputedSize = (element: HTMLElement): Size => {
  const computedStyle = window.getComputedStyle(element);
  const width = string.to.float(computedStyle.width);
  const height = string.to.float(computedStyle.height);

  return new Size(width, height);
};

export const getComputedStyle = (element: HTMLElement): CSSStyleDeclaration => {
  return window.getComputedStyle(element);
};

export const getWindowSize = (): Size => {
  const { documentElement, body } = document;
  const width = documentElement.clientWidth || body.clientWidth;
  const height = documentElement.clientHeight || body.clientHeight;

  return new Size(width, height);
};
