import add from '../src/add';

describe('add function', () => {
    it('should add two positive numbers', () => {
        expect(add(6, 4)).toBe(10);
    });

    it('should add two negative numbers', () => {
        expect(add(-6, -4)).toBe(-10);
    });

    it('should add a positive and a negative number', () => {
        expect(add(6, -4)).toBe(2);
    });

    it('should add two floating-point numbers', () => {
        expect(add(1.5, 2.5)).toBeCloseTo(4); 
    });

    it('should add a number and zero', () => {
        expect(add(6, 0)).toBe(6);
    });

    it('should add zero and a number', () => {
        expect(add(0, 4)).toBe(4);
    });

    it('should add two large positive numbers without precision issues', () => {
        const result = add(9999999999999999, 1);
        expect(result).toBe(10000000000000000);
    });

    it('should add two large negative numbers without precision issues', () => {
        const result = add(-9999999999999999, -1);
        expect(result).toBe(-10000000000000000);
    });

    it('should handle adding zero to zero', () => {
        expect(add(0, 0)).toBe(0);
    });

    it('should handle adding negative and positive infinity', () => {
        expect(add(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY)).toBeNaN();
    });

    it('should handle adding NaN values', () => {
        expect(add(6, NaN)).toBeNaN();
    });

    it('should handle adding negative and positive zero', () => {
        expect(add(-0, 0)).toBe(0);
    });
});
