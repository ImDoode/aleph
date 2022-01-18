import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = '/';

@Injectable({
  providedIn: 'root'
})

export class ApiHttpService {
  
  constructor(
    private http: HttpClient
  ) { }
  public get(url: string, options?: any) {
    return this.http.get(`${API_URL}${url}`, options);
  }
  public post(url: string, data: any, options?: any) {
    return this.http.post(`${API_URL}${url}`, data, options);
  }
  public put(url: string, data: any, options?: any) {
    return this.http.put(`${API_URL}${url}`, data, options);
  }
  public delete(url: string, options?: any) {
    return this.http.delete(`${API_URL}${url}`, options);
  }
}
