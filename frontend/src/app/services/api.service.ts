import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  postRegister(endpoint: string, formData: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    console.log(url, formData);
    return this.http.post<any>('','');//(url, formData);
  }

  postLogin(endpoint: string, formData: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    console.log(url, formData);
    return this.http.post<any>('','');//(url, formData);
  }
}
