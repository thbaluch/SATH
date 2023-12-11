import reduce from '../src/reduce';

describe('reduce', () => {
  it('should reduce an array to a single value using a sum function', () => {
    const sum = (accumulator, value) => accumulator + value;
    const result = reduce([1, 2, 3, 4], sum, 0);
    
    expect(result).toBe(10);
  });

  it('should accumulate values in an object grouped by their keys', () => {
    const groupByKeys = (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    };
    const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, groupByKeys, {});
    
    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
  });

  it('should use the first element of an array if accumulator is not provided', () => {
    const multiply = (accumulator, value) => accumulator * value;
    const result = reduce([2, 3, 4], multiply);
    
    expect(result).toBe(24);
  });

  it('should return undefined for an empty collection if no accumulator is given', () => {
    const result = reduce([], (acc, val) => acc + val);
    
    expect(result).toBeUndefined();
  });

  it('should return the accumulator if collection is empty', () => {
    const result = reduce({}, (acc, val) => acc + val, 'default');
    
    expect(result).toBe('default');
  });

});
