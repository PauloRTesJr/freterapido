import { Component } from '@angular/core';
import { Currency } from '@freterapido/model';

@Component({
  selector: 'freterapido-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  mockCurrency = {
    name: 'Dólar Canadense',
    value: 4,
    updateAt: new Date(),
    variation: 0.11,
  } as Currency;

  arrayMock = [this.mockCurrency, this.mockCurrency, this.mockCurrency];
}
