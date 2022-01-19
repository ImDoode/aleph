import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import { IMinersDataset } from './miners.controller';

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

const DASHBOARD_DATA: IMinersDataset[] = [];

@Injectable({
  providedIn: 'root'
})

export class MinersService {

  constructor(private apiService: ApiHttpService) {
    for (let i = 0; i < 10; i++) {
      DASHBOARD_DATA.push(
        {
          address: makeAddress(64),
          shares: Math.floor(Math.random()*500000 + 400000),
          domination: parseFloat((Math.random()*100).toFixed(2)),
          hashrate: parseFloat((Math.random()*39000 + 1000).toFixed(4)),
        }
      );
    }
  }

  public getDashboardData(): Observable<IMinersDataset[]> {
    return of(DASHBOARD_DATA);
    /*return this.apiService.get<IDashboardDataset[]>('dashboard').pipe(
      map(result => result.json())
    );*/
  }
}
