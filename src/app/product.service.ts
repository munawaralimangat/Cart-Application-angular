import { Injectable } from '@angular/core';
//injectable is a decorator that is part of angulr's core library, It makes a class as available to the angular dependancy injection
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// httpClient is used to communicate with http requests 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
}
