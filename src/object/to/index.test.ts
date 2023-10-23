import { object } from "../..";

describe('object.to', () => {
  test('object', () => {
    expect(object.to.string({ x: 1, y: 2 })).toEqual('{"x":1,"y":2}');
    expect(object.to.string([1, 2, 3])).toEqual('[1,2,3]');
  });
});
