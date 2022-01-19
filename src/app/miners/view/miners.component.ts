import { Component, Input } from '@angular/core';
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
  ]

  constructor() { }

}
