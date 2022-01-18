import { Component, Input, OnInit } from '@angular/core';
import { IDashboardDataset } from '../dashboard.controller';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponentViews implements OnInit {
  @Input() dataset!: IDashboardDataset[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
