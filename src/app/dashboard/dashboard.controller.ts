import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { formatHash } from '../core/utils';
import { DashboardService } from './dashboard.service';

export interface IDashboardDataset {
  type: string;
  value: number;
  postfix?: string;
  title?: string;
}

enum eDashboardDataTitles {
  hashrate = 'Hashrate',
  activeMiners = 'Active Miners',
  payouts = 'Payouts'
}

@Component({
  selector: 'app-dashboard-controller',
  template: `
    <app-dashboard-view
      [dataset]="dataset | async"
    ></app-dashboard-view>
  `,
})

export class DashboardComponentController implements OnInit {
  public dataset: Observable<IDashboardDataset[]>;

  constructor(private dashboardService: DashboardService) {
    this.dataset = this.dashboardService.getDashboardData().pipe(
      map((items: IDashboardDataset[]) => items.map(item => this.formatData(item))),
    );
  }

  ngOnInit(): void {
  }

  private formatData(item: IDashboardDataset): IDashboardDataset {
    switch (item.type) {
      case 'hashrate':
        const {formattedValue, formattedPostfix} = formatHash(item.value);
        item.value = formattedValue;
        item.postfix = formattedPostfix
    }
    item.title = eDashboardDataTitles[item.type as keyof typeof eDashboardDataTitles] || 'unknown field';
    return {...item};
  }

}
