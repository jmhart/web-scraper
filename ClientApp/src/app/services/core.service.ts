import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  constructor(private http: HttpClient) { }

  getData(url) {
    let params = new HttpParams().set('url', url);
    return this.http.get("api/web-scraper", { params: params });
  }

}

