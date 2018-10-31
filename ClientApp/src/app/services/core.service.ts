import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlData } from '../models/url-data';

@Injectable()
export class CoreService {

  constructor(private http: HttpClient) { }

  getData(url) {
    let params = new HttpParams().set('url', url);
    return this.http.get<UrlData>("api/web-scraper", { params: params });
  }

}

