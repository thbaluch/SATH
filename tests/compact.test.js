import compact from '../src/compact';

describe('compact', () => {
  it('should remove all falsey values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    expect(compact([false, null, 0, NaN, undefined, '', true])).toEqual([true]);
  });

  it('should handle arrays with only falsey values', () => {
    expect(compact([null, undefined, NaN, 0, '', false])).toEqual([]);
  });

  it('should preserve truthy values', () => {
    expect(compact([1, 'hello', true, [], { a: 1 }])).toEqual([1, 'hello', true, [], { a: 1 }]);
  });

  it('should return an empty array for an empty input array', () => {
    expect(compact([])).toEqual([]);
  });

  it('should handle arrays with mixed truthy and falsey values', () => {
    expect(compact([1, false, 3, undefined, '', 6])).toEqual([1, 3, 6]);
    expect(compact([0, null, true, NaN, 'hello', 5])).toEqual([true, 'hello', 5]);
  });
});
