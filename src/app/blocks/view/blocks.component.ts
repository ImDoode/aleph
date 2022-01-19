import { Component, Input, OnInit } from '@angular/core';
import { IBlocksDataset } from '../blocks.controller';

@Component({
  selector: 'app-blocks-view',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponentView implements OnInit {
  @Input() dataset!: IBlocksDataset[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
