import { Injectable } from '@angular/core';
import  {basePath} from  "../constants";
import { HttpClient, HttpHeaders, }  from '@angular/common/http';
import { Company } from '../model/company';
import { JobOffer } from '../model/jobOffer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  public defaultHeaders = new HttpHeaders();

  
  constructor(protected httpClient: HttpClient) {}

  public createCompany(body: Company): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling createCompany.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('post',`${basePath}/companies`,
        {
            body: body,
            headers: headers,
        }
      );
  }


  public deleteCompany(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling deleteCompany.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('delete',`${basePath}/companies/${encodeURIComponent(String(id))}`,
        {
            headers: headers,
        }
    );
  }


  public getCompanyById(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getCompanyById.');
    }

    let headers = this.defaultHeaders;


    return this.httpClient.request<Company>('get',`${basePath}/companies/${encodeURIComponent(String(id))}`,
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

  public updateCompany(body: Company, id: number,): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling updateCompany.');
    }

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling updateCompany.');
    }

    let headers = this.defaultHeaders;

  
    return this.httpClient.request<any>('put',`${basePath}/companies/${encodeURIComponent(String(id))}`,
        {
            body: body,
            headers: headers,
        }
    );
}



}
