const Calculator = require('./calculator');

let calc;

describe('Calculator English', () => {
  beforeAll(() => {
    calc = new Calculator('en');
  });

  it('should be able to add two English numbers together', () => {
    expect(calc.calculate('one plus three')).toEqual(4);
    expect(calc.calculate('four plus nine')).toEqual(13);
    expect(calc.calculate('six plus one')).toEqual(7);
  });

  it('should be able to subtract two English numbers from each other', () => {
    expect(calc.calculate('four minus six')).toEqual(-2);
    expect(calc.calculate('five minus five')).toEqual(0);
    expect(calc.calculate('eight minus nine')).toEqual(-1);
  });

  it('should be able to multiply two English numbers', () => {
    expect(calc.calculate('eight times four')).toEqual(32);
    expect(calc.calculate('ten times three')).toEqual(30);
    expect(calc.calculate('seven times six')).toEqual(42);
  });

  it('should return unknown operation when an unknown operation is used', () => {
    expect(calc.calculate('one foo one')).toBe('unknown operation');
  });
});

describe('Calculator German', () => {
  beforeAll(() => {
    calc = new Calculator('de');
  });
  it('should be able to add two German numbers together', () => {
    expect(calc.calculate('Einz plus Drei')).toEqual(4);
    expect(calc.calculate('Vier plus Neun')).toEqual(13);
    expect(calc.calculate('Sechs plus Einz')).toEqual(7);
  });

  it('should be able to subtract two German numbers from each other', () => {
    expect(calc.calculate('Vier minus Sechs')).toEqual(-2);
    expect(calc.calculate('Funf minus Funf')).toEqual(0);
    expect(calc.calculate('Acht minus Neun')).toEqual(-1);
  });

  it('should be able to multiply two German numbers', () => {
    expect(calc.calculate('Acht mal Vier')).toEqual(32);
    expect(calc.calculate('Zehn mal Drei')).toEqual(30);
    expect(calc.calculate('Sieben mal Sechs')).toEqual(42);
  });
});
