import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { IDashboardDataset } from '../dashboard.controller';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponentViews implements OnInit {
  @Input() dataset!: IDashboardDataset[] | null;
  @Output() convertCurrency: EventEmitter<never> = new EventEmitter<never>();


  public faSyncAlt = faSyncAlt;

  constructor() { }

  ngOnInit(): void {
  }

  public convertClick() {
    this.convertCurrency.emit();
  }

}
