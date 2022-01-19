import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMiner } from '../miner-page/miner-page.controller';
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

const MINER: IMiner = {
  address: makeAddress(64),
  sharePerHour: Math.floor(Math.random()*500 + 400),
  sharePerDay: Math.floor(Math.random()*500 + 400)*24,
  blocks: [makeAddress(16), makeAddress(16), makeAddress(16), makeAddress(16)],
  hashrate: parseFloat((Math.random()*39000 + 1000).toFixed(4))
}

@Injectable({
  providedIn: 'root'
})

export class MinerPageService {

  constructor(private apiService: ApiHttpService) {

  }

  public getDashboardData(): Observable<IMiner> {
    return of(MINER);
    /*return this.apiService.get<IDashboardDataset[]>('dashboard').pipe(
      map(result => result.json())
    );*/
  }
}
