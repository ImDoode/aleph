import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiHttpService } from '../shared/api-http.service';
import { IDashboardDataset } from './dashboard.controller';

const DASHBOARD_DATA: IDashboardDataset[] = [
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

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  constructor(private apiService: ApiHttpService) {}

  public getDashboardData(): Observable<IDashboardDataset[]> {
    return of(DASHBOARD_DATA);
    /*return this.apiService.get<IDashboardDataset[]>('dashboard').pipe(
      map(result => result.json())
    );*/
  }
}
