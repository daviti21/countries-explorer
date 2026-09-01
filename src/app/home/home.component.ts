import {Component} from '@angular/core';
import { Search } from './search/search';
import { CountryList } from './country-list/country-list';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [Search, CountryList],
 })
export class HomeComponent {}
