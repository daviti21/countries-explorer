import { Injectable, signal, computed} from '@angular/core';
import data from '../data.json';
import { Country } from './country.interface';
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  regions = signal(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']);
  countries = signal<Country[]>([...data].sort(() => Math.random() - 0.5));
  selectedRegion = signal('');
  selectedCountry = signal<Country | null>(null);
  searchValue = signal('');

  filteredCountries = computed(() =>
    this.countries().filter((country) => {
      const matchesSearch = country.name.toLowerCase().startsWith(this.searchValue().toLowerCase());

      const matchesRegion =
        !this.selectedRegion() ||
        country.region.toLowerCase() === this.selectedRegion().toLowerCase();

      return matchesSearch && matchesRegion;
    }),
  );

  selectRegion(region: string) {
    if (this.selectedRegion() === region) {
      this.selectedRegion.set('');
    } else {
      this.selectedRegion.set(region);
    }
  }
}
