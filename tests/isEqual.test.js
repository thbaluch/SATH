import eq from '../src/eq';

describe('eq', () => {
  it('should return true for identical values', () => {
    expect(eq(1, 1)).toBe(true);
    expect(eq('hello', 'hello')).toBe(true);
    expect(eq(true, true)).toBe(true);
    expect(eq(null, null)).toBe(true);
  });

  it('should return false for different values', () => {
    expect(eq(1, 2)).toBe(false);
    expect(eq('hello', 'world')).toBe(false);
    expect(eq(true, false)).toBe(false);
    expect(eq(null, undefined)).toBe(false);
  });

  it('should return true for NaN', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  it('should return false for different types with same value', () => {
    expect(eq('5', 5)).toBe(false);
    expect(eq(0, false)).toBe(false);
    expect(eq('', 0)).toBe(false);
  });

  it('should handle objects with same contents', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(eq(obj1, obj1)).toBe(true);
    expect(eq(obj1, obj2)).toBe(false);
  });

  it('should handle special object comparisons', () => {
    expect(eq({}, {})).toBe(false);
    expect(eq([], [])).toBe(false);
    const func = () => {};
    expect(eq(func, func)).toBe(true);
  });
});
