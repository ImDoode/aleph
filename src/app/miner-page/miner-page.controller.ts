import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MinerPageService } from './miner-page.service';


export interface IMinerPageDataset {
  type: string;
  value: number | string | string[];
  originalValue?: number;
  postfix?: string;
  title?: string;
}

enum eMinerPageTitles {
  address = 'Address',
  sharePerHour = 'Share/hour',
  sharePerDay = 'Share/day',
  hashrate = 'Hashrate',
  blocks = 'Blocks',
}

@Component({
  selector: 'app-miner-page',
  template: `
    <app-miner-page-view
      [dataset]="dataset | async"
    ></app-miner-page-view>
  `
})
export class MinerPageComponentController implements OnInit {
  public dataset!: Observable<IMinerPageDataset[]>;
  constructor(private minerPageService: MinerPageService) {
    this.updateData();
  }

  private updateData(): void {
    this.dataset = this.minerPageService.getMinerData().pipe(
      map((items: IMinerPageDataset[]) => items.map(item => this.formatData(item))),
    );
  }
  private formatData(item: IMinerPageDataset): IMinerPageDataset {
    item.title = eMinerPageTitles[item.type as keyof typeof eMinerPageTitles] || 'unknown field';
    return {...item};
  }

  ngOnInit(): void {
  }

}
