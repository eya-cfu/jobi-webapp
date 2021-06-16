import { Injectable } from '@angular/core';
import  {basePath} from  "../constants";
import { HttpClient, HttpHeaders, HttpParams, }  from '@angular/common/http';
import { User } from '../model/user';
import { Observable,BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public defaultHeaders = new HttpHeaders();
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  
  constructor(protected httpClient: HttpClient) {  
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable(); 
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public login(username, password) {
    return this.httpClient.post<any>('${basePath}/signin', { username, password })
        .pipe(map(user => {
            // store user details local storage to keep user logged in
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
  }

  logout() {
    // remove user from local storage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


}
