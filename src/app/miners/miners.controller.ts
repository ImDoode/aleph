import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MinersService } from './miners.service';

export interface IMinersDataset {
  address: string;
  shares: number;
  domination: number;
  hashrate: number;
}

@Component({
  selector: 'app-miners',
  template: `
    <app-miners-view
      [dataset]="dataset | async"
    ></app-miners-view>
  `
})
export class MinersComponentController implements OnInit {
  public dataset!: Observable<IMinersDataset[]>;
  constructor(private minersService: MinersService) {
    this.updateData();
  }

  private updateData(): void {
    this.dataset = this.minersService.getDashboardData().pipe(
      //map((items: MinersService[]) => items.map(item => this.formatData(item))),
    );
  }

  ngOnInit(): void {
  }

}
