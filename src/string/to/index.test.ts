import { string } from "../..";

describe('string.to', () => {
  test('boolean', () => {
    expect(string.to.boolean(undefined)).toBe(false);
    expect(string.to.boolean(null)).toBe(false);

    expect(string.to.boolean('true')).toBe(true);
    expect(string.to.boolean('True')).toBe(true);
    expect(string.to.boolean('TRUE')).toBe(true);

    expect(string.to.boolean('false')).toBe(false);
    expect(string.to.boolean('False')).toBe(false);
    expect(string.to.boolean('FALSE')).toBe(false);

    expect(string.to.boolean(true)).toBe(true);
    expect(string.to.boolean(false)).toBe(false);

    expect(string.to.boolean(1)).toBe(true);
    expect(string.to.boolean(0)).toBe(false);
  });

  test('int', () => {
    expect(string.to.int(undefined)).toBe(0);
    expect(string.to.int(null)).toBe(0);

    expect(string.to.int(1)).toBe(1);
    expect(string.to.int(12)).toBe(12);

    expect(string.to.int('1')).toBe(1);
    expect(string.to.int('12')).toBe(12);

    expect(string.to.int('10px')).toBe(10);
    expect(string.to.int('180deg')).toBe(180);

    expect(string.to.int('0xff', 16)).toBe(255);
  });

  test('float', () => {
    expect(string.to.float(undefined)).toBe(0);
    expect(string.to.float(null)).toBe(0);

    expect(string.to.float(1.2)).toBe(1.2);
    expect(string.to.float(12.3)).toBe(12.3);

    expect(string.to.float('1.2')).toBe(1.2);
    expect(string.to.float('12.3')).toBe(12.3);

    expect(string.to.float('10.5px')).toBe(10.5);
    expect(string.to.float('180.5deg')).toBe(180.5);
  });

  test('object', () => {
    expect(string.to.object('{ "x": 1, "y": 2 }')).toEqual({ x: 1, y: 2 });
    expect(string.to.object('[1, 2, 3]')).toEqual([1, 2, 3]);
  });

  test('base64', () => {
    expect(string.to.base64('')).toBe('');
    expect(string.to.base64('test')).toBe('dGVzdA==');
    expect(string.to.base64('한글 테스트')).toBe('7ZWc6riAIO2FjOyKpO2KuA==');
    expect(string.to.base64('😀🎉')).toBe('8J+YgPCfjok=');
  });
});
