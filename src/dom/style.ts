import { Point, Size, is, number, string } from "..";

const strToInt = string.to.int;
const numToPx = number.to.pxString;

/**
 * Set element style
 * @param element Element to set style
 * @param key Style key string
 * @param value Style value string
 */
export const setCss = ({ style }: HTMLElement, key: string, value: string): void => {
  (style as any)[key] = value;
};

/**
 * Get CSS size of element
 * @param element Element to get size
 * @returns Css size of element
 */
export const getCssSize = ({ style: { width, height } }: HTMLElement): Size => {
  return new Size(string.to.int(width), strToInt(height));
};

/**
 * Set CSS size of element
 * @param element Element to set size
 * @param width Number to set width
 * @param height Number to set height
 */
export const setCssSize = (element: HTMLElement, width?: number | null, height?: number | null): void => {
  element.style.width = is.nil(width) ? '' : numToPx(width);
  element.style.height = is.nil(height) ? '' : numToPx(height);
};

/**
 * Get CSS point of element
 * @param element Element to get point
 * @returns CSS point of element
 */
export const getCssPoint = ({ style: { left, top } }: HTMLElement): Point => {
  return new Point(strToInt(left), strToInt(top));
};

/**
 * Set CSS point of element
 * @param element Element to set point
 * @param x Number to set left
 * @param y Number to set top
 */
export const setCssPoint = (element: HTMLElement, x?: number | null, y?: number | null): void => {
  element.style.left = is.nil(x) ? '' : numToPx(x);
  element.style.top = is.nil(y) ? '' : numToPx(y);
};

/**
 * Set CSS scale of element
 * @param element Element to set scale
 * @param zoomRate Number to set scale
 */
export const setCssScale = (element: HTMLElement, zoomRate: number): void => {
  const scale = `scale(${zoomRate}, ${zoomRate})`;
  const style = element.style as any;

  style.webkitTransform = scale;
  style.msTransform = scale;
  style.transform = scale;
};

/**
 * Set CSS position of element to absolute
 * @param element Element to set absolute
 * @param top Number to set top
 * @param right Number to set right
 * @param bottom Number to set bottom
 * @param left Number to set left
 */
export const setAbsolute = (element: HTMLElement, top?: number | null, right?: number | null, bottom?: number | null, left?: number | null): void => {
  element.style.position = 'absolute';
  element.style.top = is.nil(top) ? '' : numToPx(top);
  element.style.right = is.nil(right) ? '' : numToPx(right);
  element.style.bottom = is.nil(bottom) ? '' : numToPx(bottom);
  element.style.left = is.nil(left) ? '' : numToPx(left);
};
