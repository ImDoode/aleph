import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMinerPageDataset } from '../miner-page/miner-page.controller';
import { ApiHttpService } from '../shared/api-http.service';

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

const MINER: IMinerPageDataset[] = [
  {
    type: 'address',
    value: makeAddress(64),
  },
  {
    type: 'sharePerHour',
    value: Math.floor(Math.random()*500 + 400),
  },
  {
    type: 'sharePerDay',
    value: Math.floor(Math.random()*500 + 400)*24,
  },
  {
    type: 'blocks',
    value: [makeAddress(16), makeAddress(16), makeAddress(16), makeAddress(16)],
  },
  {
    type: 'hashrate',
    value: parseFloat((Math.random()*39000 + 1000).toFixed(4))
  },
];

@Injectable({
  providedIn: 'root'
})

export class MinerPageService {

  constructor(private apiService: ApiHttpService) {

  }

  public getMinerData(): Observable<IMinerPageDataset[]> {
    return of(MINER);
    /*return this.apiService.get<IDashboardDataset[]>('dashboard').pipe(
      map(result => result.json())
    );*/
  }
}
