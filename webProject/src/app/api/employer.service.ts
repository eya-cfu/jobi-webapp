import { Injectable } from '@angular/core';
import  {basePath} from  "../constants";
import { HttpClient, HttpHeaders, }  from '@angular/common/http';
import { Company } from '../model/company';
import { Employer } from '../model/employer';
import { JobOffer } from '../model/jobOffer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  public defaultHeaders = new HttpHeaders();
  constructor(protected httpClient: HttpClient) { }

  public createEmployer(body: Employer): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling createEmployer.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('post',`${basePath}/employers`,
        {
            body: body,
            headers: headers,
        }
    );
  }


  public deleteEmployer(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling deleteEmployer.');
    }

    let headers = this.defaultHeaders;


    return this.httpClient.request<any>('delete',`${basePath}/employers/${encodeURIComponent(String(id))}`,
        {
            headers: headers,
        }
    );
  }


  public getAllEmployers(): Observable<any> {

    let headers = this.defaultHeaders;

    return this.httpClient.request<Employer>('get',`${basePath}/employers`,
        {
            headers: headers,
        }
    );
  }

  public getCompanyByEmployerID(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getCompanyByEmployerID.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<Company>('get',`${basePath}/employers/${encodeURIComponent(String(id))}/company`,
        {
            headers: headers, 
        }
    );
  }

  public getEmployerById(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getEmployerById.');
    }

    let headers = this.defaultHeaders;

    

    return this.httpClient.request<Employer>('get',`${basePath}/employers/${encodeURIComponent(String(id))}`,
        {
            headers: headers,
        }
    );
  }

  public getOffersByCompany(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getOffersByCompany.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<JobOffer>('get',`${basePath}/companies/${encodeURIComponent(String(id))}/offers`,
        {
            headers: headers,
        }
    );
  }

  public updateEmployer(body: Employer, id: number): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling updateEmployer.');
    }

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling updateEmployer.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('put',`${basePath}/employers/${encodeURIComponent(String(id))}`,
        {
            body: body,
            headers: headers,
        }
    );
}





}
