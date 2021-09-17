import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {
  private baseUrl="http://localhost:8083/Angular_Chart";
  constructor(private http:HttpClient) { }
  getJson():Observable<any>{
     return this.http.get(`${this.baseUrl}`);
}
}
