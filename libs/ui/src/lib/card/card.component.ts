import { Component, Input } from '@angular/core';
import { Currency } from '@freterapido/model';

@Component({
  selector: 'freterapido-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  currency!: Currency;

  priceColor(): string {
    const { value } = this.currency;
    if (value < 1) {
      return 'red';
    }

    if (value > 5) {
      return 'blue';
    }

    return 'green';
  }
}
