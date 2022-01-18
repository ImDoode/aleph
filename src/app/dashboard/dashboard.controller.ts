import { Component, OnInit } from '@angular/core';

export interface IDashboardDataset {
  title: string;
  value: string;
  postfix?: string;
}

@Component({
  selector: 'app-dashboard-controller',
  template: `
    <app-dashboard-view
      [dataset]="dataset"
    ></app-dashboard-view>
  `,
})

export class DashboardComponentController implements OnInit {
  public dataset: IDashboardDataset[] = [
    {
      title: 'Hashrate',
      value: '500',
      postfix: 'KH/s'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
