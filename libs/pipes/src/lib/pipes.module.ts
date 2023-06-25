import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrCurrencyPipe } from './br-currency.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [BrCurrencyPipe],
  exports: [BrCurrencyPipe],
})
export class PipesModule {}
