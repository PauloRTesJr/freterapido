import { Component, Input } from '@angular/core';
import { Currency } from '@freterapido/model';

@Component({
  selector: 'freterapido-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  title!: string;

  @Input()
  isLoading!: boolean;

  @Input()
  currency!: Currency | null;

  priceColor(): string {
    const price = this.currency?.value ?? 0;
    if (price < 1) {
      return 'red';
    }

    if (price > 5) {
      return 'blue';
    }

    return 'green';
  }
}
