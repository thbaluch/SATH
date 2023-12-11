import map from '../src/map';

describe('map', () => {
  it('should map array elements using the provided function', () => {
    const square = (n) => n * n;
    expect(map([4, 8], square)).toEqual([16, 64]);
  });

  it('should handle an empty array', () => {
    const double = (n) => n * 2;
    expect(map([], double)).toEqual([]);
  });

  it('should return a new array with mapped values', () => {
    const addIndex = (value, index) => value + index;
    expect(map([1, 2, 3], addIndex)).toEqual([1, 3, 5]);
  });

  it('should handle non-numeric values', () => {
    const toString = (value) => value.toString();
    expect(map([true, null, undefined, 'hello'], toString)).toEqual([
      'true',
      'null',
      'undefined',
      'hello',
    ]);
  });

  it('should preserve original array', () => {
    const array = [1, 2, 3];
    const double = (n) => n * 2;
    map(array, double);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should handle complex objects and nested arrays', () => {
    const objArray = [{ x: 1 }, { x: 2 }, { x: 3 }];
    const extractX = (obj) => obj.x;
    expect(map(objArray, extractX)).toEqual([1, 2, 3]);

    const nestedArray = [[1], [2, 3], [4, 5, 6]];
    const firstElement = (arr) => arr[0];
    expect(map(nestedArray, firstElement)).toEqual([1, 2, 4]);
  });
});
