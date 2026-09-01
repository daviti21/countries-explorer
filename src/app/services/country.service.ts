import { Injectable, signal, computed} from '@angular/core';
import data from '../data.json';
@Injectable({
  providedIn: 'root',
})
export class CountryService {
  regions = signal(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']);
  countries = signal([...data].sort(() => Math.random() - 0.5));
  search = signal('');
  selectedRegion = signal('');
  filteredCountries = computed(() =>
    this.countries().filter((country) => {
      const matchesSearch = country.name.toLowerCase().startsWith(this.search().toLowerCase());

      const matchesRegion =
        !this.selectedRegion() ||
        country.region.toLowerCase() === this.selectedRegion().toLowerCase();

      return matchesSearch && matchesRegion;
    }),
  );

}
