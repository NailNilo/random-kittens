import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DogapiService {


  constructor(private http: HttpClient) { }

  getCatImages(): Observable<any> {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_uWDqWkLVAPX7E8ykijheDkh1rKm3mZ9858pQUc7tBUyLe5AMhpjvS1fylIfaBPvX';
    return this.http.get<any[]>(apiUrl)

  }
}
