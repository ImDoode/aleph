import { Component } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ColorSchemeService } from './shared/color-scheme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public faMoon = faMoon;
  public faSun = faSun;
  public isDark = this.colorSchemeService.isDark;
  title = 'aleph';

  constructor (private colorSchemeService: ColorSchemeService) {}

  public changeColorScheme(): void {
    this.colorSchemeService.changeColorScheme();
    this.isDark = this.colorSchemeService.isDark;
  }
}
