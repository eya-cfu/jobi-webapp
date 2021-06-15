import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private HttpClient) { }
/*
  login(credentials):Observable<any> {
    this.HttpClient.post(API URL here)
  }
  */
 isAuthentificated():boolean{
   return !!localStorage.getItem('token');
 }
}
