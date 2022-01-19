import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MinerPageService } from './miner-page.service';


export interface IMiner {
  address: string;
  sharePerHour: number;
  sharePerDay: number;
  hashrate: number;
  blocks: string[];
}

@Component({
  selector: 'app-miner-page',
  template: `
    <app-miner-page-view
      [miner]="miner | async"
    ></app-miner-page-view>
  `
})
export class MinerPageComponentController implements OnInit {
  public miner!: Observable<IMiner>;
  constructor(private minersService: MinerPageService) {
    this.updateData();
  }

  private updateData(): void {
    this.miner = this.minersService.getDashboardData().pipe(
      //map((items: MinersService[]) => items.map(item => this.formatData(item))),
    );
  }

  ngOnInit(): void {
  }

}
