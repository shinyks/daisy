import { Hsv, Rgba } from "..";
import { hsv, rgb } from ".";

export const htmlToRgba = (cstr: string): Rgba => {
  const match = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^)]*)\)/.exec(cstr);
  const baseHues: any = {
    red: 0,
    orange: 60,
    yellow: 120,
    green: 180,
    blue: 240,
    purple: 300,
  };

  let alpha = 0;
  let space = 'rgb';
  let parts = [0, 0, 0];

  if (typeof cstr === 'string') {
    // reserved words
    if (cstr === 'transparent') {
      alpha = 0;
      space = 'rgb';
      parts = [0, 0, 0];
    }
    else if (/^#[A-Fa-f0-9]+$/.test(cstr)) { // hex
      const base = cstr.slice(1);
      const size = base.length;
      const isShort = size <= 4;

      alpha = 1;

      if (isShort) {
        parts = [parseInt(base[0] + base[0], 16), parseInt(base[1] + base[1], 16), parseInt(base[2] + base[2], 16)];

        if (size === 4) {
          alpha = parseInt(base[3] + base[3], 16) / 255;
        }
      }
      else {
        parts = [parseInt(base[0] + base[1], 16), parseInt(base[2] + base[3], 16), parseInt(base[4] + base[5], 16)];

        if (size === 8) {
          alpha = parseInt(base[6] + base[7], 16) / 255;
        }
      }

      if (!parts[0]) parts[0] = 0;
      if (!parts[1]) parts[1] = 0;
      if (!parts[2]) parts[2] = 0;

      space = 'rgb';
    }
    else if (match) { // color space
      const name = match[1];
      const isRGB = name === 'rgb';
      const base = name.replace(/a$/, '');
      const size = base === 'cmyk' ? 4 : base === 'gray' ? 1 : 3;
      space = base;
      parts = match[2].trim()
        .split(/\s*[,/]\s*|\s+/)
        .map((x, i) => {
          if (/%$/.test(x)) { // <percentage>
            // alpha
            if (i === size)	return parseFloat(x) / 100;
            // rgb
            if (base === 'rgb') return parseFloat(x) * 255 / 100;

            return parseFloat(x);
          }
          else if (base[i] === 'h') { // hue
            // <deg>
            if (/deg$/.test(x)) {
              return parseFloat(x);
            }
            // <base-hue>
            else if (baseHues[x] !== undefined) {
              return baseHues[x];
            }
          }

          return parseFloat(x);
        });

      if (name === base) parts.push(1);

      alpha = (isRGB) ? 1 : (parts[size] === undefined) ? 1 : parts[size];
      parts = parts.slice(0, size);
    }
    else if (cstr.length > 10 && /[0-9](?:\s|\/)/.test(cstr)) { // named channels case
      parts = cstr.match(/([0-9]+)/g)?.map((value) => {
        return parseFloat(value);
      }) ?? [];

      space = cstr.match(/([a-z])/ig)?.join('').toLowerCase() ?? '';
    }
  }

  return {
    r: parts[0] ? parts[0] : 0,
    g: parts[1] ? parts[1] : 0,
    b: parts[2] ? parts[2] : 0,
    a: alpha * 255,
  };
};

export const rgbaToHex = (rgba: Rgba): string => {
  const red = Math.round(Math.max(Math.min(255, rgba.r), 0)).toString(16);
  const green = Math.round(Math.max(Math.min(255, rgba.g), 0)).toString(16);
  const blue = Math.round(Math.max(Math.min(255, rgba.b), 0)).toString(16);
  const alpha = Math.round(Math.max(Math.min(255, rgba.a), 0)).toString(16);

  const rr = (red.length < 2 ? '0' : '') + red;
  const gg = (green.length < 2 ? '0' : '') + green;
  const bb = (blue.length < 2 ? '0' : '') + blue;
  const aa = (alpha.length < 2 ? '0' : '') + alpha;

  return `#${rr}${gg}${bb}` + (aa === 'ff' ? '' : aa);
};

export const rgbaToHsv = ({ r, g, b }: Rgba): Hsv => {
  const max = Math.max(r, g, b);
  const diff = max - Math.min(r, g, b);
  let hue = 0;
  let saturation = (max === 0) ? 0 : (100 * diff / max);
  let value = 0;

  if (saturation === 0) {
    hue = 0;
  } else if (r === max) {
    hue = 60.0 * (g - b) / diff;
  } else if (g === max) {
    hue = 120.0 + 60.0 * (b - r) / diff;
  } else if (b === max) {
    hue = 240.0 + 60.0 * (r - g) / diff;
  }

  if (hue < 0.0) {
    hue += 360.0;
  }

  value = Math.round(max * 100 / 255);
  hue = Math.round(hue);
  saturation = Math.round(saturation);

  return hsv(hue, saturation, value);
};

export const htmlToHsv = (cstr: string): Hsv => {
  const rgba = htmlToRgba(cstr);

  return rgbaToHsv(rgba);
};

export const hsvToRgba = (hsv: Hsv): Rgba => {
  let r = 0;
  let g = 0;
  let b = 0;

  if (hsv.saturation === 0) {
    r = g = b = Math.round(hsv.value * 2.55);
  } else {
    hsv.hue /= 60;
    hsv.saturation /= 100;
    hsv.value /= 100;

    const i = Math.floor(hsv.hue);
    const f = hsv.hue - i;
    const p = hsv.value * (1 - hsv.saturation);
    const q = hsv.value * (1 - hsv.saturation * f);
    const t = hsv.value * (1 - hsv.saturation * (1 - f));

    switch (i) {
      case 0: r = hsv.value; g = t; b = p; break;
      case 1: r = q; g = hsv.value; b = p; break;
      case 2: r = p; g = hsv.value; b = t; break;
      case 3: r = p; g = q; b = hsv.value; break;
      case 4: r = t; g = p; b = hsv.value; break;
      default: r = hsv.value; g = p; b = q;
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
  }

  return rgb(r, g, b);
};

export const hsvToHex = (hsv: Hsv): string => {
  const rgba = hsvToRgba(hsv);

  return rgbaToHex(rgba);
};

export const hueShift = (h: number, s: number): number => {
  h += s;

  while (h >= 360.0) {
    h -= 360.0;
  }

  while (h < 0.0) {
    h += 360.0;
  }

  return h;
};

export const complement = (cstr: string): string => {
  const hsv = htmlToHsv(cstr);

  hsv.hue = hueShift(hsv.hue, 180.0);

  return hsvToHex(hsv);
};
