import { calc } from "..";

describe('calc', () => {
  test('easing', () => {
    expect(Math.round(calc.linear(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.linear(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInSine(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInSine(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeOutSine(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeOutSine(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInOutSine(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInOutSine(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInQuad(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInQuad(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeOutQuad(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeOutQuad(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInOutQuad(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInOutQuad(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInCubic(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInCubic(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeOutCubic(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeOutCubic(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInOutCubic(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInOutCubic(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInQuart(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInQuart(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeOutQuart(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeOutQuart(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInOutQuart(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInOutQuart(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInQuint(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInQuint(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeOutQuint(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeOutQuint(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInOutQuint(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInOutQuint(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInExpo(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInExpo(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeOutExpo(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeOutExpo(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInOutExpo(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInOutExpo(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInCirc(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInCirc(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeOutCirc(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeOutCirc(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInOutCirc(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInOutCirc(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInBack(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInBack(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeOutBack(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeOutBack(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInOutBack(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInOutBack(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInElastic(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInElastic(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeOutElastic(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeOutElastic(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.easeInOutElastic(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.easeInOutElastic(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.bounceEaseIn(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.bounceEaseIn(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.bounceEaseOut(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.bounceEaseOut(7, 13, 7, 7) * 1000) / 1000).toBe(20);

    expect(Math.round(calc.bounceEaseInOut(0, 13, 7, 7) * 1000) / 1000).toBe(13);
    expect(Math.round(calc.bounceEaseInOut(7, 13, 7, 7) * 1000) / 1000).toBe(20);
  });
});
