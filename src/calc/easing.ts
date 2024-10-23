/**
 * easing function: https://spicyyoghurt.com/tools/easing-functions
 * easing graph: https://easings.net/
 * t: current time
 * b: beginning value
 * c: change in value (상대적 변화량)
 * d: duration
 */

export type Easing = (t: number, b: number, c: number, d: number) => number;

export const linear = (t: number, b: number, c: number, d: number): number => {
  return (c * t) / d + b;
};

export const easeInSine = (t: number, b: number, c: number, d: number): number => {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};

export const easeOutSine = (t: number, b: number, c: number, d: number): number => {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
};

export const easeInOutSine = (t: number, b: number, c: number, d: number): number => {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};

export const easeInQuad = (t: number, b: number, c: number, d: number): number => {
  return c * (t /= d) * t + b;
};

export const easeOutQuad = (t: number, b: number, c: number, d: number): number => {
  return -c * (t /= d) * (t - 2) + b;
};

export const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
  if ((t /= d / 2) < 1) {
    return (c / 2) * t * t + b;
  }
  return (-c / 2) * (--t * (t - 2) - 1) + b;
};

export const easeInCubic = (t: number, b: number, c: number, d: number): number => {
  return c * (t /= d) * t * t + b;
};

export const easeOutCubic = (t: number, b: number, c: number, d: number): number => {
  return c * ((t = t / d - 1) * t * t + 1) + b;
};

export const easeInOutCubic = (t: number, b: number, c: number, d: number): number => {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
};

export const easeInQuart = (t: number, b: number, c: number, d: number): number => {
  return c * (t /= d) * t * t * t + b;
};

export const easeOutQuart = (t: number, b: number, c: number, d: number): number => {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};

export const easeInOutQuart = (t: number, b: number, c: number, d: number): number => {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};

export const easeInQuint = (t: number, b: number, c: number, d: number): number => {
  return c * (t /= d) * t * t * t * t + b;
};

export const easeOutQuint = (t: number, b: number, c: number, d: number): number => {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};

export const easeInOutQuint = (t: number, b: number, c: number, d: number): number => {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
};

export const easeInExpo = (t: number, b: number, c: number, d: number): number => {
  return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
};

export const easeOutExpo = (t: number, b: number, c: number, d: number): number => {
  return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
};

export const easeInOutExpo = (t: number, b: number, c: number, d: number): number => {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
};

export const easeInCirc = (t: number, b: number, c: number, d: number): number => {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
};

export const easeOutCirc = (t: number, b: number, c: number, d: number): number => {
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
};

export const easeInOutCirc = (t: number, b: number, c: number, d: number): number => {
  if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
  return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
};

export const easeInBack = (t: number, b: number, c: number, d: number): number => {
  const s = 1.70158;
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
};

export const easeOutBack = (t: number, b: number, c: number, d: number): number => {
  const s = 1.70158;
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};

export const easeInOutBack = (t: number, b: number, c: number, d: number): number => {
  let s = 1.70158;
  if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
  return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
};

export const easeInElastic = (t: number, b: number, c: number, d: number): number => {
  if (t === 0) {
    return b;
  }
  if ((t /= d) === 1) {
    return b + c;
  }
  const p = d * 0.3;
  const a = c;
  const s = p / 4;
  return (
    -(
      a *
      Math.pow(2, 10 * (t -= 1)) *
      Math.sin(((t * d - s) * (2 * Math.PI)) / p)
    ) + b
  );
};

export const easeOutElastic = (t: number, b: number, c: number, d: number): number => {
  if (t === 0) {
    return b;
  }
  if ((t /= d) === 1) {
    return b + c;
  }
  const p = d * 0.3;
  const a = c;
  const s = p / 4;
  return (
    a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
    c +
    b
  );
};

export const easeInOutElastic = (t: number, b: number, c: number, d: number): number => {
  if (t === 0) {
    return b;
  }
  if ((t /= d / 2) === 2) {
    return b + c;
  }
  const p = d * (0.3 * 1.5);
  const a = c;
  const s = p / 4;
  if (t < 1) {
    return (
      -0.5 *
        (a *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
      b
    );
  }
  return (
    a *
      Math.pow(2, -10 * (t -= 1)) *
      Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
      0.5 +
    c +
    b
  );
};

export const bounceEaseIn = (t: number, b: number, c: number, d: number): number => {
  return c - bounceEaseOut(d - t, 0, c, d) + b;
};

export const bounceEaseOut = (t: number, b: number, c: number, d: number): number => {
  if ((t /= d) < 1 / 2.75) {
    return c * (7.5625 * t * t) + b;
  } else if (t < 2 / 2.75) {
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
  } else if (t < 2.5 / 2.75) {
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
  } else {
    return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
  }
};

export const bounceEaseInOut = (t: number, b: number, c: number, d: number): number => {
  if (t < d / 2) {
    return bounceEaseIn(t * 2, 0, c, d) * 0.5 + b;
  } else {
    return bounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
  }
};
