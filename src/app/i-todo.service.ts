import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ITodoService {

  private itodoUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }
  getData(urlName): Observable<any> {
    // console.log(`${this.itodoUrl}/${urlName}`);
    // return of('asd')
    return this.http.get(`${this.itodoUrl}/${urlName}`);
  }
}
