import { Component } from '@angular/core';
@Component({
  selector: 'freterapido-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  currencies = ['CAD', 'ARS', 'GBP'];
}
