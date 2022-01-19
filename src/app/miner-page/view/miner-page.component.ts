import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { IMinerPageDataset } from '../miner-page.controller';

@Component({
  selector: 'app-miner-page-view',
  templateUrl: './miner-page.component.html',
  styleUrls: ['./miner-page.component.scss']
})
export class MinerPageComponentView {
  @Input() dataset!: IMinerPageDataset[] | null;
  @Output() convertCurrency: EventEmitter<never> = new EventEmitter<never>();

  public faSyncAlt = faSyncAlt;

  public convertClick() {
    this.convertCurrency.emit();
  }

}
