import { Hsv, Rgba } from "..";

export const rgb = (r: number, g: number, b: number): Rgba => {
  return { r, g, b, a: 255 };
};

export const rgba = (r: number, g: number, b: number, a: number): Rgba => {
  return { r, g, b, a };
};

export const hsv = (hue: number, saturation: number, value: number): Hsv => {
  return { hue, saturation, value };
};
