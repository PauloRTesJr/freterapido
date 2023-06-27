import { BrCurrencyPipe } from './br-currency.pipe';

describe('BrCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new BrCurrencyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return currency format if symbol is passed', () => {
    const pipe = new BrCurrencyPipe();

    expect(pipe.transform(123.123, 'R$')).toBe('R$123,12');
  });

  it('should return currency format if symbol is passed', () => {
    const pipe = new BrCurrencyPipe();

    expect(pipe.transform(123.123, 'R$')).toBe('R$123,12');
  });

  it('should convert dot to comma in normal numbers', () => {
    const pipe = new BrCurrencyPipe();

    expect(pipe.transform(123.123, '')).toBe('123,12');
  });

  it('should fix 2 decimals values', () => {
    const pipe = new BrCurrencyPipe();

    expect(pipe.transform(4, '')).toBe('4,00');
  });
});
