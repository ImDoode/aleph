import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BlocksService, IBlock } from './blocks.service';

export interface IBlocksDataset {
  type: string;
  value: number;
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
  selector: 'app-Blocks',
  template: `
    <app-blocks-view
      [dataset]="dataset | async"
      [blocksList]="blocksList | async"
    ></app-blocks-view>
  `
})
export class BlocksComponentController implements OnInit {
  public dataset!: Observable<IBlocksDataset[]>;
  public blocksList!: Observable<IBlock[]>
  constructor(private blocksService: BlocksService) {
    this.updateData();
  }

  private updateData(): void {
    this.dataset = this.blocksService.getBlocksData().pipe(
      map((items: IBlocksDataset[]) => items.map(item => this.formatData(item))),
    );
    this.blocksList = this.blocksService.getBlocksListData();
    
  }

  ngOnInit(): void {
  }

  private formatData(item: IBlocksDataset): IBlocksDataset {
    item.title = eMinerPageTitles[item.type as keyof typeof eMinerPageTitles] || 'unknown field';
    return {...item};
  }

}
