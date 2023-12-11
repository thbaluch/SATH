import filter from '../src/filter';

describe('filter function', () => {
    it('should filter elements based on the provided predicate', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ];

        const result = filter(users, ({ active }) => active);

        expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
    });

    it('should handle an empty array', () => {
        const result = filter([], (value) => value);

        expect(result).toEqual([]);
    });

    it('should handle an array with all falsy values', () => {
        const result = filter([false, 0, '', null, undefined, NaN], (value) => value);

        expect(result).toEqual([]);
    });

    // Add more test cases based on your requirements
});
