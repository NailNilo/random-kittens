import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DogapiService {


  constructor(private http: HttpClient) { }

  getCatImages(): Observable<any> {
// ----------------------------------///----------------------------
    // get a free api key from   https://thecatapi.com  ///

    // or use this free API : https://api.thecatapi.com/v1/images/search?limit=10
    // ----------------------------------///----------------------------

    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=12&api_key=URAPIKEYHERE';
    return this.http.get<any[]>(apiUrl)

  }
}
