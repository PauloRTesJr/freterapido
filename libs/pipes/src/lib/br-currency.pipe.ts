import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brCurrency',
})
export class BrCurrencyPipe implements PipeTransform {
  transform(value: number, symbol = ''): string {
    return (symbol + Number(value).toFixed(2)).replace('.', ',');
  }
}
