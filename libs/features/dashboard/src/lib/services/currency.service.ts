import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestCurrency } from '@freterapido/model';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyService {
  baseApi = 'https://economia.awesomeapi.com.br/last/';

  constructor(private httpClient: HttpClient) {}

  loadCurrency(currency: string): Observable<RequestCurrency> {
    return this.httpClient.get<RequestCurrency>(
      this.baseApi + currency + '-BRL'
    );
  }
}
