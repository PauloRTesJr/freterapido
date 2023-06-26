import { Component, Input, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Currency, CurrencyName, RequestCurrency } from '@freterapido/model';

@Component({
  selector: 'freterapido-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
})
export class CurrencyCardComponent implements OnInit {
  @Input()
  currencyCode!: string;

  currency: Currency | null = null;

  isLoading = false;

  constructor(private currencyService: CurrencyService) {}

  get currencyName(): string {
    return CurrencyName[this.currencyCode];
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.currencyService.loadCurrency(this.currencyCode).subscribe({
      next: (data: RequestCurrency) => {
        const requestData = data[this.currencyCode + 'BRL'];
        console.log(requestData);
        this.currency = {
          name: this.currencyName,
          value: requestData.bid,
          updateAt: new Date(),
          variation: requestData.varBid,
        } as Currency;
        this.isLoading = false;
      },
      error: (e) => {
        this.isLoading = false;
        console.error(e);
      },
    });
  }
}
