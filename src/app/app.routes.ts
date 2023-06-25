import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@freterapido/features/dashboard').then((m) => m.DashboardModule),
  },
  { path: '**', redirectTo: '/dashboard' },
];
