import { Component, inject } from '@angular/core';
 import {ThemeService} from '../services/theme.service';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  themeService = inject(ThemeService);

}
