import { Component, inject, signal } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  imports: [],
  selector: 'app-search',
  styleUrl: './search.css',
  templateUrl: './search.html',
})
export class Search  {
  isActive = signal(false);
  regionString = signal('Region');
regionActive = signal(false);
  optionActive() {
    this.isActive.update((v) => !v);
  }
  countryService = inject(CountryService);
  searchCountry(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.countryService.searchValue.set(value);
  }
  searchedRegion(region: string) {
    this.countryService.selectedRegion.set(region);
  }
  regionStringValue() {
       this.regionActive.update((v) => !v);
       if(this.regionActive()){
         this.regionString.set(this.countryService.selectedRegion());
       }else {
         this.regionString.set("Region");
       }

  }
}
