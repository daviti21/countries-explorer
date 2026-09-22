import { CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core'
import { CountryService } from './services/country.service';

export const appGuard: CanActivateFn = (route) => {
  const countryS = inject(CountryService)
  const p = route.routeConfig?.path;
  const router = inject(Router);

  if(countryS.selectedCountry() === null) {
   return  router.parseUrl('');
  }

  return true

};
