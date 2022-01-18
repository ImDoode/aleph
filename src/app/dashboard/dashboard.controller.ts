import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrencyService } from '../shared/currency.service';
import { formatHash } from '../shared/utils';
import { DashboardService } from './dashboard.service';

export interface IDashboardDataset {
  type: string;
  value: number;
  originalValue?: number;
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
      (convertCurrency)="convertCurrency()"
    ></app-dashboard-view>
  `,
})

export class DashboardComponentController implements OnInit {
  public dataset!: Observable<IDashboardDataset[]>;

  constructor(
    private dashboardService: DashboardService,
    private currencyService: CurrencyService
  ) {
    this.updateData();
  }

  ngOnInit(): void {
  }

  private updateData(): void {
    this.dataset = this.dashboardService.getDashboardData().pipe(
      map((items: IDashboardDataset[]) => items.map(item => this.formatData(item))),
    );
  }

  public convertCurrency() {
    this.currencyService.changeNextCurrency();
    this.updateData();
  }

  private formatData(item: IDashboardDataset): IDashboardDataset {
    switch (item.type) {
      case 'hashrate': {
        const {formattedValue, formattedPostfix} = formatHash(item.value, 's');
        item.value = formattedValue;
        item.postfix = formattedPostfix;
        break;
      }
      case 'payouts': {
        item.originalValue = item.originalValue ? item.originalValue : item.value;
        const {formattedValue, formattedPostfix} = this.currencyService.getConvertedCurrency(item.originalValue);
        item.value = formattedValue;
        item.postfix = formattedPostfix;
        break;
      }
      default:
        break;
    }
    item.title = eDashboardDataTitles[item.type as keyof typeof eDashboardDataTitles] || 'unknown field';
    return {...item};
  }

}
