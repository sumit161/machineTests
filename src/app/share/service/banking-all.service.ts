import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iusers } from '../model/userInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankingAllService {
  productsUrl: string = `${environment.ProductsUrl}`;
  // BaseUrl: string = `${environment.bankinUrl}/users`;
  // ProgressUrl: string = `${environment.bankinUrl}/progress`;
  constructor(private _http: HttpClient) {}
  // GetAllUsers(): Observable<Iusers[]> {
  //   return this._http.get<Iusers[]>(this.BaseUrl);
  // }
  // GetAllProgress(): Observable<any[]> {
  //   return this._http.get<any[]>(this.ProgressUrl);
  // }
  GetAllProducts(): Observable<any> {
    return this._http.get<any>(this.productsUrl);
  }
}
