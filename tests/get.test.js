import get from '../src/get';

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  it('should get the value at the specified path using dot notation', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  it('should get the value at the specified path using array notation', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  it('should return default value for undefined paths', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  it('should return undefined if object is null or undefined', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
    expect(get(undefined, 'a.b.c')).toBeUndefined();
  });

  it('should return default value if resolved value is undefined', () => {
    expect(get(object, 'x.y.z', 'default')).toBe('default');
  });

});
