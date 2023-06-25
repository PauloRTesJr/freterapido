import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { PipesModule } from '@freterapido/pipes';

@NgModule({
  imports: [CommonModule, PipesModule],
  declarations: [HeaderComponent, CardComponent],
  exports: [HeaderComponent, CardComponent],
})
export class UiModule {}
