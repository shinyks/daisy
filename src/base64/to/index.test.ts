import { base64 } from "../..";

describe('base64.to', () => {
  test('plain', () => {
    expect(base64.to.plain('')).toBe('');
    expect(base64.to.plain('dGVzdA==')).toBe('test');
    expect(base64.to.plain('7ZWc6riAIO2FjOyKpO2KuA==')).toBe('한글 테스트');
    expect(base64.to.plain('8J+YgPCfjok=')).toBe('😀🎉');
  });
});
