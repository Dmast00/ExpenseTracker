import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  api = 'https://localhost:44315/api/'
  constructor(private http : HttpClient) { }


  getTransaction() : Observable<any>{
   return this.http.get(this.api+'Transactions')
  }

  postTransaction(item :any):Observable<any>{
    return this.http.post(this.api+'Transactions',item)
  }
}
