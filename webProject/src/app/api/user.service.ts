import { Injectable } from '@angular/core';
import  {basePath} from  "../constants";
import { HttpClient, HttpHeaders, HttpParams, }  from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public defaultHeaders = new HttpHeaders();
  constructor(protected httpClient: HttpClient) { }

  public createUser(body: User): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling createUser.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('post',`${basePath}/users`,
        {
            body: body,
            headers: headers,
        }
    );
  }

  public deleteUser(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling deleteUser.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('delete',`${basePath}/users/${encodeURIComponent(String(id))}`,
        {
            headers: headers,
        }
    );
  }

  public getAllUsers(): Observable<any> {

    let headers = this.defaultHeaders;

    return this.httpClient.request<User>('get',`${basePath}/users`,
        {
            headers: headers,
        }
    );
  }

  public getUserById(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getUserById.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<User>('get',`${basePath}/users/${encodeURIComponent(String(id))}`,
        {
            headers: headers,
        }
    );
  }

  public updateUser(body: User, id: number): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling updateUser.');
    }

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling updateUser.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('put',`${basePath}/users/${encodeURIComponent(String(id))}`,
        {
            body: body,
            headers: headers,
        }
    );
  }
}
