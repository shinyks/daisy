import { Rgba } from "../..";

export const html = (cstr: string): Rgba => {
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
      parts = [0,0,0];
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
