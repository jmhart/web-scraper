import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  constructor(private http: HttpClient) { }

  getData() {
    return 'some data';
  }

}

