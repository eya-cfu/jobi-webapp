import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private HttpClient:HttpClient) { }
  
  login(credentials): Observable<any> {
   return this.HttpClient.post("https://virtserver.swaggerhub.com/eya-cfu/jobsWebsite/1.0/students/login", credentials )
  }
  
 isAuthentificated():boolean{
   return !!localStorage.getItem('token');
 }
}
