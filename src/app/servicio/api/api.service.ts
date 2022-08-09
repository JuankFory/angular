import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string ='https://jsonplaceholder.typicode.com/users/';

  constructor(public http:HttpClient) { }

  public getDatos():Observable<any>{   
    
    return  this.http.get(this.url);
  }

  


}
