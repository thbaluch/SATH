import isBoolean from '../src/isBoolean';

describe('isBoolean', () => {
  it('should return true for boolean primitives', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it('should return true for boolean objects', () => {
    expect(isBoolean(new Boolean(true))).toBe(true);
    expect(isBoolean(new Boolean(false))).toBe(true);
  });

  it('should return false for non-boolean values', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(function () {})).toBe(false);
    expect(isBoolean(Symbol())).toBe(false);
  });

  it('should handle custom objects with "valueOf" method returning boolean', () => {
    const customObjTrue = {
      valueOf: () => true,
    };
    const customObjFalse = {
      valueOf: () => false,
    };
    expect(isBoolean(customObjTrue)).toBe(true);
    expect(isBoolean(customObjFalse)).toBe(true);
  });

  it('should handle objects with overridden equality checks', () => {
    const customObj = {
      valueOf: () => true,
      [Symbol.toPrimitive]: () => 'boolean',
    };
    expect(isBoolean(customObj)).toBe(true);
  });

  it('should return false for objects with overridden toString', () => {
    const customObj = {
      valueOf: () => true,
      toString: () => 'true',
    };
    expect(isBoolean(customObj)).toBe(false);
  });
});
