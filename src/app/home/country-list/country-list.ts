import { Component, signal, inject, HostListener, OnInit } from '@angular/core';
 import { CountryService } from '../../services/country.service';
 import { RouterLink} from '@angular/router';
import { Country } from '../../services/country.interface';

@Component({
  imports: [RouterLink],
  selector: 'app-country-list',
  styleUrl: './country-list.css',
  templateUrl: './country-list.html',
})
export class CountryList implements OnInit {
  coService = inject(CountryService);
  countries = this.coService.countries();
  visibleCount = signal(0);
  num = signal(0);
  load() {
    this.visibleCount.update((count) => count + this.num());
  }
  less() {
    this.visibleCount.update((count) => count - this.num());
  }
  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth >= 1024 && window.innerWidth <= 1200) {
      this.visibleCount.set(9);
      this.num.set(9);
     } else {
      this.visibleCount.set(8);
      this.num.set(8);
    }
  }
  selectCountry(country: Country) {
    this.coService.selectedCountry.set(country);
  }
  ngOnInit() {
    this.checkScreenSize();
  }
}
