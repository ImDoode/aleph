import { Route } from '@angular/compiler/src/core';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';

interface ICurrency {
  slug: string;
  ratio: number;
  symbol?: string;
}

const CURRENCY_CONVERTER:ICurrency[] = [
  {
    slug: 'dollar',
    ratio: 1,
    symbol: '$'
  },
  {
    slug: 'rouble',
    ratio: 76.4,
    symbol: '₽'
  },
  {
    slug: 'btc',
    ratio: 0.000024,
    symbol: '₿'
  }
];

const CURRENCY_LIST = [
  'dollar', 'rouble', 'btc'
];

export const TICKER_LIST = [
  'alph', 'btc', 'eth'
];

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  private currentIndex = 0;
  public currentTicker$ = new Subject<string>();
  
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(
        filter(event => {
          return event instanceof NavigationEnd;
        }),
        map(() => this.activatedRoute.children[0]),
        take(1)
      ).subscribe(activatedRoute => {
        activatedRoute.params.subscribe(params => {
          const ticker = params['ticker'];
        
          if (TICKER_LIST.includes(ticker)) {
            this.currentTicker$.next(ticker);
          }
        })
      })
  }

  public changeNextCurrency() {
    this.currentIndex = this.currentIndex === (CURRENCY_LIST.length -1) ? 0 : this.currentIndex + 1;
  }
  public getConvertedCurrency(value: number) {
    const currentCurrency = CURRENCY_CONVERTER?.find(item => item.slug === CURRENCY_LIST[this.currentIndex]);
    return {
      formattedValue: parseFloat((value * (currentCurrency?.ratio || 1)).toFixed(4)),
      formattedPostfix: currentCurrency?.symbol
    }
  }
}
