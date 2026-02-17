import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'travel',
    loadChildren: () => import('./features/routes/shell.routes').then(m => m.SHELL_ROUTES)
  },
  {
    path: '', redirectTo: 'travel', pathMatch: 'full'
  }
];
