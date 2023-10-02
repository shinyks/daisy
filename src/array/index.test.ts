import { range } from ".";

describe('range', () => {
  test('인수 없음', () => {
    expect(JSON.stringify((range as any)())).toBe(JSON.stringify([]));
  });

  test('기본 수열', () => {
    expect(JSON.stringify(range(0, 5))).toBe(JSON.stringify([0, 1, 2, 3, 4]));
  });

  test('등차 수열', () => {
    expect(JSON.stringify(range(0, 5, 2))).toBe(JSON.stringify([0, 2, 4, 6, 8]));
    expect(JSON.stringify(range(0, 5, 3))).toBe(JSON.stringify([0, 3, 6, 9, 12]));
  });
});
