import { is } from "..";

const numberList = [
  0,
  1,
  -1,
  0.1,
];

const stringList = [
  '',
  'asdf',
  '1234',
  '!@#$',
  '12as',
];

const arrayList = [
  [[]],
  [[1, 2, 3]],
  [['a', 'b', 'c']],
  [[{ 'a': 'a' }, { 'b': 2 }]],
];

const objectList = [
  [{}],
  [{ 'a': [1, 2, 3] }],
];

const funcList = [
  [(): void => { /**/ }],
];

const generalTest = (testList: any[], testFunction: any, expectResult: boolean): void => {
  test.each(testList)(`%j -> ${expectResult}`, (fixture) => expect(testFunction(fixture)).toBe(expectResult));
};

describe('array', () => {
  test('인수 없음', () => expect(is.array(undefined)).toBe(false));
  describe('숫자', () => generalTest(numberList, is.array, false));
  describe('문자열', () => generalTest(stringList, is.array, false));
  describe('배열', () => generalTest(arrayList, is.array, true));
  describe('객체', () => generalTest(objectList, is.array, false));
  describe('함수', () => generalTest(funcList, is.array, false));
});

describe('object', () => {
  test('인수 없음', () => expect(is.object(undefined)).toBe(false));
  describe('숫자', () => generalTest(numberList, is.object, false));
  describe('문자열', () => generalTest(stringList, is.object, false));
  describe('배열', () => generalTest(arrayList, is.object, false));
  describe('객체', () => generalTest(objectList, is.object, true));
  describe('함수', () => generalTest(funcList, is.object, false));
});

describe('string', () => {
  test('인수 없음', () => expect(is.string(undefined)).toBe(false));
  describe('숫자', () => generalTest(numberList, is.string, false));
  describe('문자열', () => generalTest(stringList, is.string, true));
  describe('배열', () => generalTest(arrayList, is.string, false));
  describe('객체', () => generalTest(objectList, is.string, false));
  describe('함수', () => generalTest(funcList, is.string, false));
});

describe('number', () => {
  test('인수 없음', () => expect(is.number(undefined)).toBe(false));
  describe('숫자', () => generalTest(numberList, is.number, true));
  describe('문자열', () => generalTest(stringList, is.number, false));
  describe('배열', () => generalTest(arrayList, is.number, false));
  describe('객체', () => generalTest(objectList, is.number, false));
  describe('함수', () => generalTest(funcList, is.number, false));
});

describe('func', () => {
  test('인수 없음', () => expect(is.func(undefined)).toBe(false));
  describe('숫자', () => generalTest(numberList, is.func, false));
  describe('문자열', () => generalTest(stringList, is.func, false));
  describe('배열', () => generalTest(arrayList, is.func, false));
  describe('객체', () => generalTest(objectList, is.func, false));
  describe('함수', () => generalTest(funcList, is.func, true));
});

describe('und', () => {
  test('인수 없음', () => {
    expect(is.und(undefined)).toBe(true);
  });

  let und: any;

  test('초기화 안된 변수', () => {
    expect(is.und(und)).toBe(true);
  });

  test('초기화된 변수', () => {
    und = 0;
    expect(is.und(und)).toBe(false);
  });

  test('null', () => {
    und = null;
    expect(is.und(und)).toBe(false);
  });
});

describe('nil', () => {
  test('인수 없음', () => {
    expect(is.nil(undefined)).toBe(true);
  });

  let nil: any;

  test('초기화 안된 변수', () => {
    expect(is.nil(nil)).toBe(true);
  });

  test('초기화된 변수', () => {
    nil = 0;
    expect(is.nil(nil)).toBe(false);
  });

  test('초기화된 변수', () => {
    nil = null;
    expect(is.nil(nil)).toBe(true);
  });
});

describe('numericString', () => {
  test('인수 없음', () => {
    expect(is.numericString(undefined)).toBe(false);
    expect(is.numericString(null)).toBe(false);
  });

  test('숫자, 객체, 배열', () => {
    expect(is.numericString(0)).toBe(false);
    expect(is.numericString(1)).toBe(false);
    expect(is.numericString({})).toBe(false);
    expect(is.numericString([])).toBe(false);
  });

  test('숫자인 문자열', () => {
    expect(is.numericString('0')).toBe(true);
    expect(is.numericString('1')).toBe(true);
    expect(is.numericString('1.5')).toBe(true);
    expect(is.numericString('1px')).toBe(true);
  });

  test('숫자가 아닌 문자열', () => {
    expect(is.numericString('asdf')).toBe(false);
  });
});

describe('pxString', () => {
  test('인수 없음', () => {
    expect(is.pxString(undefined)).toBe(false);
    expect(is.pxString(null)).toBe(false);
  });

  test('숫자, 객체, 배열', () => {
    expect(is.pxString(0)).toBe(false);
    expect(is.pxString(1)).toBe(false);
    expect(is.pxString({})).toBe(false);
    expect(is.pxString([])).toBe(false);
  });

  test('px 문자열', () => {
    expect(is.pxString('0px')).toBe(true);
    expect(is.pxString('1px')).toBe(true);
    expect(is.pxString('1.5px')).toBe(true);
    expect(is.pxString('asdfpx')).toBe(false);
  });

  test('px가 아닌 문자열', () => {
    expect(is.pxString('asdf')).toBe(false);
    expect(is.pxString('12pxasdf')).toBe(false);
  });
});
