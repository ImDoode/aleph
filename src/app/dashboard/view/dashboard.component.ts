import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { IDashboardDataset } from '../dashboard.controller';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponentViews {
  @Input() dataset!: IDashboardDataset[] | null;
  @Output() convertCurrency: EventEmitter<never> = new EventEmitter<never>();

  public faSyncAlt = faSyncAlt;

  public convertClick() {
    this.convertCurrency.emit();
  }

}
