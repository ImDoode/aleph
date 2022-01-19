import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlocksService } from './blocks.service';

export interface IBlocksDataset {
  address: string;
  shares: number;
  domination: number;
  hashrate: number;
}

@Component({
  selector: 'app-Blocks',
  template: `
    <app-blocks-view
      [dataset]="dataset | async"
    ></app-blocks-view>
  `
})
export class BlocksComponentController implements OnInit {
  public dataset!: Observable<IBlocksDataset[]>;
  constructor(private blocksService: BlocksService) {
    this.updateData();
  }

  private updateData(): void {
    this.dataset = this.blocksService.getDashboardData().pipe(
      //map((items: BlocksService[]) => items.map(item => this.formatData(item))),
    );
  }

  ngOnInit(): void {
  }

}
