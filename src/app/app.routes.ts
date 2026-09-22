import { Routes } from '@angular/router';
import { appGuard } from './app.guard';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'CountryDetail/:name',
    loadComponent: () => import('./country-details/country-details').then((m) => m.CountryDetails),
    canActivate: [appGuard]
  },
  {
    path: '**',
    redirectTo: '/Home',
  },
];
