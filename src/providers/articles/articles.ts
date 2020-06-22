import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { env } from '../../envs/env';

/*
  Generated class for the ArticlesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const API_URL = env.API_URL;
const API_KEY = env.API_Key;

@Injectable()
export class ArticlesProvider {

  constructor(public http: HttpClient) 
  {  console.log('Hello ArticlesProvider Provider'); }

  getArticles(url)
  {
  	return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
