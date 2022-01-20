import { Component, Input, OnInit } from '@angular/core';
import { IBlocksDataset } from '../blocks.controller';
import { IBlock } from '../blocks.service';

@Component({
  selector: 'app-blocks-view',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponentView implements OnInit {
  @Input() dataset!: IBlocksDataset[] | null;
  @Input() blocksList!: IBlock[] | null;
  public tableColumns:({slug: keyof IBlock, title: string}[]) = [
    {
      slug: 'number',
      title: 'Number',
    },
    {
      slug: 'address',
      title: 'Address',
    },
    {
      slug: 'time',
      title: 'Time',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
