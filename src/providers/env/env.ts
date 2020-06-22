import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EnvProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnvProvider {
  API_URL = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=291fcc2352ca45608c03a1880ee03ca6';

  constructor(public http: HttpClient) {
    console.log('Hello EnvProvider Provider');
  }

}
