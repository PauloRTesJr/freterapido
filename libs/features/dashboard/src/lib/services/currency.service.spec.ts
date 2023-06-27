import { TestBed } from '@angular/core/testing';
import { CurrencyService } from './currency.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { Currency, RequestCurrency } from '@freterapido/model';

describe('CurrencyService', () => {
  let service: CurrencyService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService],
    });

    service = TestBed.inject(CurrencyService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a new currency when requested', () => {
    service.loadCurrency('CAD').subscribe((data) => {
      expect(data['CAD']).toBe({ bid: 5, varBid: 5 });
    });

    const req = httpTestingController.expectOne(service.baseApi + 'CAD-BRL');
    expect(req.request.method).toEqual('GET');

    req.flush({ CAD: { bid: 5, varBid: 5 } } as RequestCurrency);
  });

  it('should check if currency is from less then 3 minutes', () => {
    jest.useFakeTimers().setSystemTime(new Date(2023, 6, 26, 5, 30, 0, 0));
    const date = new Date(2023, 6, 26, 5, 31, 0, 0);
    const currency = {
      code: '',
      name: '',
      value: 5,
      variation: 5,
      updateAt: date,
    } as Currency;

    const response = service.isValidCurrency(currency);

    expect(response).toBeTruthy();
  });

  it('should check if currency is from more then 3 minutes', () => {
    jest.useFakeTimers().setSystemTime(new Date(2023, 6, 26, 5, 30, 0, 0));
    const date = new Date(2023, 6, 26, 5, 0, 0, 0);
    const currency = {
      code: '',
      name: '',
      value: 5,
      variation: 5,
      updateAt: date,
    } as Currency;

    const response = service.isValidCurrency(currency);

    expect(response).toBeFalsy();
  });

  it('should return false if no data is passed do isValidCurrency', () => {
    jest.useFakeTimers().setSystemTime(new Date(2023, 6, 26, 5, 30, 0, 0));

    const response = service.isValidCurrency({} as Currency);

    expect(response).toBeFalsy();
  });

  it('should set and get from localStorage', () => {
    const code = 'CAD';
    const currency = {
      value: 5,
    } as Currency;

    service.setCacheCurrency(code, currency);

    service.getCacheCurrency(code);

    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
