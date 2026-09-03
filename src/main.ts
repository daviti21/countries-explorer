import { bootstrapApplication } from '@angular/platform-browser';
 import { App } from './app/app';
 import {provideRouter} from '@angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    loadComponent: () => import('./app/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'CountryDetail/:name',
    loadComponent: () => import('./app/country-details/country-details').then((m) => m.CountryDetails),
  },
];
bootstrapApplication(App, {
  providers: [provideRouter(routes) ],
});
