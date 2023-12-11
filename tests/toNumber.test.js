import toNumber from '../src/toNumber';

describe('toNumber', () => {
  it('converts floating point numbers correctly', () => {
    expect(toNumber(3.2)).toBe(3.2)
    expect(toNumber(0.1 + 0.2)).toBeCloseTo(0.3) 
  })

  it('handles Number.MIN_VALUE correctly', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324)
  })

  it('handles Infinity correctly', () => {
    expect(toNumber(Infinity)).toBe(Infinity)
  })

  it('converts string representation of numbers to numbers', () => {
    expect(toNumber('3.2')).toBe(3.2)
    expect(toNumber('100')).toBe(100)
    expect(toNumber('-123.45')).toBe(-123.45)
  })

  it('returns NaN for symbols', () => {
    expect(toNumber(Symbol('test'))).toBeNaN()
  })

  it('returns NaN for invalid hexadecimal strings', () => {
    expect(toNumber('-0xabc')).toBeNaN()
    expect(toNumber('0xabc')).toBeNaN()
  })

  it('converts binary and octal strings to numbers', () => {
    expect(toNumber('0b1010')).toBe(10)
    expect(toNumber('0o777')).toBe(511)
  })

  it('handles whitespace in strings correctly', () => {
    expect(toNumber('   3.2   ')).toBe(3.2)
    expect(toNumber('  -123.45   ')).toBe(-123.45)
  })

  it('handles objects correctly by calling valueOf if available', () => {
    const obj = {
      valueOf: () => 42
    }
    expect(toNumber(obj)).toBe(42)
  })

  it('handles objects correctly if valueOf is not available', () => {
    const obj = {
      toString: () => '42'
    }
    expect(toNumber(obj)).toBe(42)
  })

  it('returns 0 for non-numeric or non-parseable strings', () => {
    expect(toNumber('abc')).toBe(0)
    expect(toNumber('123abc')).toBe(0)
    expect(toNumber('')).toBe(0)
    expect(toNumber(null)).toBe(0)
    expect(toNumber(undefined)).toBe(0)
    expect(toNumber([])).toBe(0)
    expect(toNumber({})).toBe(0)
  })
})
