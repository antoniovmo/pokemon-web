import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages-routing')
      .then(m => m.PagesRoutes)
  },
  {
    path: '**',
    redirectTo: 'admin'
  }
];
