import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './lib.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UiModule } from '@freterapido/ui';
import { CurrencyService } from './services/currency.service';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    RouterModule,
    UiModule,
    HttpClientModule,
  ],
  declarations: [DashboardComponent, CurrencyCardComponent],
  providers: [CurrencyService],
})
export class DashboardModule {}
