import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/travel-tips/router/travel-tips.routes').then(m => m.TRAVEL_TIPS_ROUTES)
  },
];
