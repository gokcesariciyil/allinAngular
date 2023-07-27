import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class DataService {
  constructor(private httpClient: HttpClient) { }

  getPosts(el: any) {
    return this.httpClient
      .get('https://api.tvmaze.com/singlesearch/shows?q=' + el)
  }

  apiUrl = 'https://api.tvmaze.com/singlesearch/shows?q=';

  getMovies(el:any): Observable<Object[]> {
    return this.httpClient.get<Object[]>(this.apiUrl+el);
  }
}