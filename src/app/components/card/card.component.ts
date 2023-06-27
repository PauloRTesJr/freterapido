import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from 'src/app/models';

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
  isError!: boolean;

  @Input()
  currency!: Currency | null;

  @Output()
  cardClick = new EventEmitter();

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

  onClick() {
    this.cardClick.emit();
  }
}
