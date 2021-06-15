import { Injectable } from '@angular/core';
import  {basePath} from  "./constants";
import { HttpClient, HttpHeaders, }  from '@angular/common/http';
import { JobApplication } from './model/jobApplication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {
  public defaultHeaders = new HttpHeaders();
  constructor(protected httpClient: HttpClient) { }


  public createApplication(body: JobApplication): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling createApplication.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('post',`${basePath}/applications`,
        {
            body: body,
            headers: headers,
        }
    );
  }

  public deleteApplication(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling deleteApplication.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('delete',`${basePath}/applications/${encodeURIComponent(String(id))}`,
        {
            headers: headers,
        }
    );
  }

  public getAllApplications(observe: any = 'body'): Observable<any> {

    let headers = this.defaultHeaders;

    return this.httpClient.request<JobApplication>('get',`${basePath}/applications`,
        {
            headers: headers,
            observe: observe,
        }
    );
  }

  public getApplicationById(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getApplicationById.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<JobApplication>('get',`${basePath}/applications/${encodeURIComponent(String(id))}`,
        {
            headers: headers,

        }
    );
  }

  public updateApplication(body: JobApplication, id: number): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling updateApplication.');
    }

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling updateApplication.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('put',`${basePath}/applications/${encodeURIComponent(String(id))}`,
        {
            body: body,
            headers: headers,

        }
    );
  }
}
