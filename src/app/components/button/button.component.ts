import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'freterapido-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output()
  buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
