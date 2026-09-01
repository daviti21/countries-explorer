import { Component, signal, inject, HostListener } from '@angular/core';
 import { CountryService } from '../../services/country.service';
@Component({
  imports: [],
  selector: 'app-country-list',
  styleUrl: './country-list.css',
  templateUrl: './country-list.html',
})
export class CountryList {
  coService = inject(CountryService);
  countries = this.coService.countries();
  visibleCount = signal(8);
  load() {
    this.visibleCount.update((count) => count + 8);
  }
  less() {
    this.visibleCount.update((count) => count - 8);
  }
  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth >= 1024 && window.innerWidth <= 1200) {
      this.visibleCount.set(9);
    } else {
      this.visibleCount.set(8);
    }
  }
}
