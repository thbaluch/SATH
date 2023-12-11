import filter from '../src/filter';

describe('filter function', () => {
  it('should return an empty array when filtering an empty array', () => {
    const result = filter([], () => true);
    expect(result).toEqual([]);
  });

  it('should filter an array based on a predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];

    const expectedResult = [{ 'user': 'barney', 'active': true }];
    const result = filter(users, ({ active }) => active);

    expect(result).toEqual(expectedResult);
  });

  it('should handle an array with all falsy values', () => {
    const falsyValues = [false, 0, '', null, undefined, NaN];
    const result = filter(falsyValues, (value) => value);

    expect(result).toEqual([]);
  });

});
