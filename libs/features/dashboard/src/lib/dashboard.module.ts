import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './lib.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UiModule } from '@freterapido/ui';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    RouterModule,
    UiModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
