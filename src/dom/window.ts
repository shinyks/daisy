import { Point, Size, string } from "..";

/**
 * Get computed point of element
 * @param element Element to get computed point
 * @returns Computed point of element
 */
export const getComputedPoint = (element: HTMLElement): Point => {
  const computedStyle = window.getComputedStyle(element);
  const x = string.to.float(computedStyle.left);
  const y = string.to.float(computedStyle.top);

  return new Point(x, y);
};

/**
 * Get computed size of element
 * @param element Element to get computed size
 * @returns Computed size of element
 */
export const getComputedSize = (element: HTMLElement): Size => {
  const computedStyle = window.getComputedStyle(element);
  const width = string.to.float(computedStyle.width);
  const height = string.to.float(computedStyle.height);

  return new Size(width, height);
};

/**
 * Get computed style of element
 * @param element Element to get computed style
 * @returns Style description object of element
 */
export const getComputedStyle = (element: HTMLElement): CSSStyleDeclaration => {
  return window.getComputedStyle(element);
};

/**
 * Get window size
 * @returns Size of window
 */
export const getWindowSize = (): Size => {
  const { documentElement, body } = document;
  const width = documentElement.clientWidth || body.clientWidth;
  const height = documentElement.clientHeight || body.clientHeight;

  return new Size(width, height);
};
