import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './lib.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CurrencyService } from './services/currency.service';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { BrCurrencyPipe } from 'src/app/pipes/br-currency.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    RouterModule,
    HttpClientModule,
  ],
  declarations: [
    DashboardComponent,
    CurrencyCardComponent,
    CardComponent,
    ButtonComponent,
    BrCurrencyPipe,
  ],
  providers: [CurrencyService, BrCurrencyPipe],
})
export class DashboardModule {}
