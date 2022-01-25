import { Component } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ColorSchemeService } from './shared/color-scheme.service';
import { CurrencyService, TICKER_LIST } from './shared/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public faMoon = faMoon;
  public faSun = faSun;
  public isDark = this.colorSchemeService.isDark;
  public currentTicker: string = TICKER_LIST[0];
  public tickerList = TICKER_LIST;
  title = 'aleph';

  constructor (
    private colorSchemeService: ColorSchemeService,
    private router: Router,
  ) {
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
        const ticker = data.snapshot.params.ticker;
        if (TICKER_LIST.includes(ticker)) {
          this.currentTicker = ticker;
        }
      }
    });
  }

  public changeColorScheme(): void {
    this.colorSchemeService.changeColorScheme();
    this.isDark = this.colorSchemeService.isDark;
  }
}
