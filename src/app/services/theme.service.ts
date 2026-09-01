import {Injectable, signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDark = signal(false);
  toggleTheme() {
    this.isDark.update(v => v = !v)
    document.body.classList.toggle('dark', this.isDark());
  }
}
