import filter from '../src/filter';

describe('filter', () => {
  it('returns an array of elements for which the predicate returns truthy', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
    ];

    const filteredUsers = filter(users, ({ active }) => active);

    expect(filteredUsers).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  it('returns an empty array if no elements match the predicate', () => {
    const numbers = [1, 2, 3, 4, 5];

    const filteredNumbers = filter(numbers, (value) => value > 10);

    expect(filteredNumbers).toEqual([]);
  });

  it('returns a new array without mutating the original array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const predicate = (value) => value > 2;

    const filteredArray = filter(originalArray, predicate);

    expect(filteredArray).toEqual([3, 4, 5]);
    expect(originalArray).toEqual([1, 2, 3, 4, 5]);
    expect(filteredArray).not.toBe(originalArray);
  });

  it('returns an empty array for an empty input array', () => {
    const emptyArray = [];
    const predicate = (value) => value === 0;

    const filteredArray = filter(emptyArray, predicate);

    expect(filteredArray).toEqual([]);
  });
});
