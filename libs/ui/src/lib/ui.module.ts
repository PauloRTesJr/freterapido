import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { PipesModule } from '@freterapido/pipes';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule, PipesModule],
  declarations: [HeaderComponent, CardComponent, ButtonComponent],
  exports: [HeaderComponent, CardComponent],
})
export class UiModule {}
