import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'package/:id',
    loadComponent: () => import('./pages/package-detail/package-detail.component').then(m => m.PackageDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];