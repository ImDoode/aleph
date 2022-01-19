import { Component, Input, OnInit } from '@angular/core';
import { IMiner } from '../miner-page.controller';

@Component({
  selector: 'app-miner-page-view',
  templateUrl: './miner-page.component.html',
  styleUrls: ['./miner-page.component.scss']
})
export class MinerPageComponentView implements OnInit {
  @Input() miner!: IMiner | null;

  constructor() { }

  ngOnInit(): void {
  }

}
