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
  public currentPage: string = '';
  title = 'aleph';

  constructor (
    private colorSchemeService: ColorSchemeService,
    private router: Router,
    private currencyService: CurrencyService
  ) {
    this.currencyService.currentTicker$.subscribe((ticker:string) => this.currentTicker = ticker);
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
        this.currentPage = data.snapshot.url[1].path;
      }
    });
  }

  public changeColorScheme(): void {
    this.colorSchemeService.changeColorScheme();
    this.isDark = this.colorSchemeService.isDark;
  }
}
