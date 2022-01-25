import { Component, Input } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { TICKER_LIST } from 'src/app/shared/currency.service';
import { IMinersDataset } from '../miners.controller';

@Component({
  selector: 'app-miners-view',
  templateUrl: './miners.component.html',
  styleUrls: ['./miners.component.scss']
})
export class MinersComponentView {
  @Input() dataset!: IMinersDataset[] | null;

  public tableColumns:({slug: keyof IMinersDataset, title: string}[]) = [
    {
      slug: 'address',
      title: 'Wallet',
    },
    {
      slug: 'shares',
      title: 'Shares',
    },
    {
      slug: 'domination',
      title: 'Domination',
    },
    {
      slug: 'hashrate',
      title: 'Hashrate',
    },
  ];

  public currentTicker: string = TICKER_LIST[0];

  constructor (private router: Router) {
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
        const ticker = data.snapshot.params.ticker;
        if (TICKER_LIST.includes(ticker)) {
          this.currentTicker = ticker;
        }
      }
    });
  }

}
