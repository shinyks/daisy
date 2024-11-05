import { calc } from "..";

describe('calc', () => {
  test('round', () => {
    expect(calc.round(3.141592)).toBe(3);
    expect(calc.round(3.141592, 1)).toBe(3.1);
    expect(calc.round(3.141592, 2)).toBe(3.14);
  });

  test('easing', () => {
    expect(calc.round(calc.linear(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.linear(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInSine(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInSine(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeOutSine(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeOutSine(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInOutSine(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInOutSine(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInQuad(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInQuad(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeOutQuad(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeOutQuad(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInOutQuad(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInOutQuad(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInCubic(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInCubic(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeOutCubic(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeOutCubic(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInOutCubic(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInOutCubic(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInQuart(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInQuart(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeOutQuart(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeOutQuart(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInOutQuart(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInOutQuart(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInQuint(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInQuint(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeOutQuint(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeOutQuint(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInOutQuint(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInOutQuint(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInExpo(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInExpo(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeOutExpo(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeOutExpo(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInOutExpo(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInOutExpo(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInCirc(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInCirc(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeOutCirc(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeOutCirc(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInOutCirc(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInOutCirc(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInBack(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInBack(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeOutBack(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeOutBack(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInOutBack(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInOutBack(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInElastic(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInElastic(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeOutElastic(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeOutElastic(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.easeInOutElastic(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.easeInOutElastic(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.bounceEaseIn(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.bounceEaseIn(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.bounceEaseOut(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.bounceEaseOut(7, 13, 7, 7), 3)).toBe(20);

    expect(calc.round(calc.bounceEaseInOut(0, 13, 7, 7), 3)).toBe(13);
    expect(calc.round(calc.bounceEaseInOut(7, 13, 7, 7), 3)).toBe(20);
  });
});
