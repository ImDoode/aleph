import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import { IBlocksDataset } from './blocks.controller';

// TODO: TEMPORATY
function makeAddress(length: number) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

export interface IBlock {
  number: number;
  address: string;
  time: string;
}

const BLOCKS_DATA: IBlocksDataset[] = [
  {
    type: 'hashrate',
    value: 500
  },
  {
    type: 'hashrate',
    value: Math.floor(Math.random()*1000000000)
  },
  {
    type: 'activeMiners',
    value: Math.floor(Math.random()*100000)
  },
  {
    type: 'payouts',
    value: 1000//Math.floor(Math.random()*10000)
  }
];

const BLOCKS_LIST_DATA: IBlock[] = []

@Injectable({
  providedIn: 'root'
})

export class BlocksService {

  constructor(private apiService: ApiHttpService) {
    const startNumber = Math.floor(Math.random()*100000);
    for (let i = 0; i < 10; i++) {
      BLOCKS_LIST_DATA.push(
        {
          number: startNumber+i,
          address: makeAddress(64),
          time: (new Date()).toString()
        }
      );
    }
  }

  public getBlocksData(): Observable<IBlocksDataset[]> {
    return of(BLOCKS_DATA);
    /*return this.apiService.get<IDashboardDataset[]>('dashboard').pipe(
      map(result => result.json())
    );*/
  }

  public getBlocksListData(): Observable<IBlock[]> {
    return of(BLOCKS_LIST_DATA);
    /*return this.apiService.get<IDashboardDataset[]>('dashboard').pipe(
      map(result => result.json())
    );*/
  }
}
