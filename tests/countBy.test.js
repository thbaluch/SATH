import countBy from '../src/countBy';

describe('countBy', () => {
  it('should count occurrences of true and false values in an array of objects', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];

    const result = countBy(users, value => value.active);
    
    expect(result).toEqual({ 'true': 2, 'false': 1 });
  });

  it('should count occurrences of string lengths in an array of strings', () => {
    const words = ['apple', 'banana', 'orange', 'apple', 'grape'];

    const result = countBy(words, value => value.length);
    
    expect(result).toEqual({ '5': 2, '6': 2, '7': 1 });
  });

  it('should return an empty object when provided an empty array', () => {
    const emptyArray = [];

    const result = countBy(emptyArray, value => value);
    
    expect(result).toEqual({});
  });

  it('should count occurrences based on divisibility by 3 in an array of numbers', () => {
    const numbers = [2, 3, 5, 6, 9, 12, 15];

    const result = countBy(numbers, value => (value % 3 === 0) ? 'divisibleBy3' : 'notDivisibleBy3');
    
    expect(result).toEqual({ 'divisibleBy3': 4, 'notDivisibleBy3': 3 });
  });

  it('should count occurrences of values in an object and handle duplicate values', () => {
    const inputObject = {
      a: 'apple',
      b: 'banana',
      c: 'apple',
      d: 'date',
      e: 'banana'
    };

    const result = countBy(Object.values(inputObject), value => value);
    
    expect(result).toEqual({ 'apple': 2, 'banana': 2, 'date': 1 });
  });
});
