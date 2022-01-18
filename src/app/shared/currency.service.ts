import { Injectable } from '@angular/core';

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
    symbol: 'BTC'
  }
];

const CURRENCY_LIST = [
  'dollar', 'rouble', 'btc'
]

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  private currentIndex = 0;
  
  constructor(
  ) { }

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
