import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiHttpService } from '../core/api-http.service';
import { IDashboardDataset } from './dashboard.controller';

const DASHBOARD_DATA: IDashboardDataset[] = [
  {
    type: 'hashrate',
    value: 500
  },
  {
    type: 'hashrate',
    value: 50000
  },
  {
    type: 'hashrate',
    value: 5000000
  },

  {
    type: 'hashrate',
    value: 50000000000
  },
  {
    type: 'activeMiners',
    value: 50000
  },
  {
    type: 'payouts',
    value: 1000
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
