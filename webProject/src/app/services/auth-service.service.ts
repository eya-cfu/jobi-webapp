import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import  {basePath} from  "../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private HttpClient:HttpClient) { }
  
  login(credentials): Observable<any> {
   return this.HttpClient.post(`${basePath}/students/login`, credentials )
  }
  
 isAuthentificated():boolean{
   return !!localStorage.getItem('token');
 }
}
