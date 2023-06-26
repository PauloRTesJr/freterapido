import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency, RequestCurrency } from '@freterapido/model';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyService {
  storage: Storage;
  baseApi = 'https://economia.awesomeapi.com.br/last/';

  constructor(private httpClient: HttpClient) {
    this.storage = window.localStorage;
  }

  loadCurrency(currency: string): Observable<RequestCurrency> {
    return this.httpClient.get<RequestCurrency>(
      this.baseApi + currency + '-BRL'
    );
  }

  isValidCurrency(currency: Currency): boolean {
    if (!currency || !currency.updateAt) {
      return false;
    }
    const now = Date.now();

    const diffInMilliseconds = now - new Date(currency.updateAt).getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / 1000 / 60);

    return diffInMinutes < 3;
  }

  setCacheCurrency(code: string, currencyData: Currency) {
    this.storage.setItem('currency-' + code, JSON.stringify(currencyData));
  }

  getCacheCurrency(code: string): Currency | null {
    const data = this.storage.getItem(code);

    if (!data) {
      return null;
    }

    return JSON.parse(data) as Currency;
  }
}
