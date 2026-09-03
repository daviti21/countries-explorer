import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CountryService } from '../services/country.service';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  imports: [RouterLink, ReactiveFormsModule],
  selector: 'app-country-details',
  styleUrl: './country-details.css',
  templateUrl: './country-details.html',
})
export class CountryDetails implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  coService = inject(CountryService);
  country = this.coService.selectedCountry();
  countries = this.coService.countries;
  num = signal(6);
  moreBorder() {
    this.num.update((n) => n + 6);
  }
  lessBorder(){
    this.num.update((n) => n - 6);

  };
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const name = params['name'];
      this.country = this.coService.countries().find((country) => country.name === name) ?? null;
    });
  }
  findBorder(border: string) {
    const selectedBorder = this.countries().find((country) => country.alpha3Code === border);

    if (selectedBorder) {
      this.router.navigate(['/CountryDetail', selectedBorder.name]);
    }
  }
}
