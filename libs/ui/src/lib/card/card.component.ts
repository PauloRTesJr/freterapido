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
}
