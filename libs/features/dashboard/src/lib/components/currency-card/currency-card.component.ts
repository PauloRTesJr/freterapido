import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';
import { CurrencyService } from '../../services/currency.service';
import { Currency, CurrencyName, RequestCurrency } from '@freterapido/model';

@Component({
  selector: 'freterapido-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
})
export class CurrencyCardComponent implements OnInit, OnDestroy {
  @Input()
  currencyCode!: string;

  currency: Currency | null = null;

  isLoading = false;
  isError = false;

  subscriptions: Subscription;

  constructor(private currencyService: CurrencyService) {
    this.subscriptions = interval(1000).subscribe(() => {
      if (
        this.currency &&
        !this.currencyService.isValidCurrency(this.currency)
      ) {
        this.loadCurrency();
      }
    });
  }

  get currencyName(): string {
    return CurrencyName[this.currencyCode];
  }

  ngOnInit(): void {
    this.isLoading = true;
    const cachedCurrency = this.currencyService.getCacheCurrency(
      'currency-' + this.currencyCode
    );

    if (cachedCurrency) {
      this.currency = cachedCurrency;
      this.isLoading = false;
    } else {
      this.loadCurrency();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadCurrency() {
    this.subscriptions.add(
      this.currencyService
        .loadCurrency(this.currencyCode)
        .pipe(take(1))
        .subscribe({
          next: (data: RequestCurrency) => {
            this.setNewCurrency(data, false);
          },
          error: (e) => {
            this.setNewCurrency({}, true);
            console.error(e);
          },
        })
    );
  }

  setNewCurrency(data: RequestCurrency, isError: boolean) {
    this.isLoading = false;
    if (isError) {
      this.currency = null;
      this.isError = true;
      return;
    }

    const requestData = data[this.currencyCode + 'BRL'];
    const newCurrency = {
      name: this.currencyName,
      value: requestData.bid,
      updateAt: new Date(),
      variation: requestData.varBid,
    } as Currency;
    this.currency = newCurrency;
    this.currencyService.setCacheCurrency(this.currencyCode, newCurrency);
    this.isLoading = false;
    this.isError = false;
  }

  onRefreshCard() {
    this.loadCurrency();
  }
}
