import { Injectable } from '@angular/core';
import  {basePath} from  "../constants";
import { HttpClient, HttpHeaders, HttpParams, }  from '@angular/common/http';
import { JobOffer } from '../model/jobOffer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  public defaultHeaders = new HttpHeaders();
  constructor(protected httpClient: HttpClient) { }

  public createOffer(body: JobOffer): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling createOffer.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('post',`${basePath}/offers`,
        {
            body: body,
            headers: headers,
        }
    );
  }

  public deleteOffer(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling deleteOffer.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('delete',`${basePath}/offers/${encodeURIComponent(String(id))}`,
        {
            headers: headers,
        }
    );
  }

  public filterOffers(employmentType?: string, category?: string, location?: string, languages?: string): Observable<any> {

    let queryParameters = new HttpParams();
    
    if (employmentType !== undefined && employmentType !== null) {
        queryParameters = queryParameters.set('employmentType', <any>employmentType);
    }
    if (category !== undefined && category !== null) {
        queryParameters = queryParameters.set('category', <any>category);
    }
    if (location !== undefined && location !== null) {
        queryParameters = queryParameters.set('location', <any>location);
    }
    if (languages !== undefined && languages !== null) {
        queryParameters = queryParameters.set('languages', <any>languages);
    }

    let headers = this.defaultHeaders;

  

    return this.httpClient.request<JobOffer>('get',`${basePath}/offers/filter`,
        {
            params: queryParameters,
            headers: headers,
        }
    );
  }


  public getAllOffers(): Observable<any> {

    let headers = this.defaultHeaders;

    return this.httpClient.request<JobOffer>('get',`${basePath}/offers`,
        {
            headers: headers,
        }
    );
  }

  public getOfferById(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getOfferById.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<JobOffer>('get',`${basePath}/offers/${encodeURIComponent(String(id))}`,
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

  public updateOffer(body: JobOffer, id: number): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling updateOffer.');
    }

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling updateOffer.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('put',`${basePath}/offers/${encodeURIComponent(String(id))}`,
        {
            body: body,
            headers: headers,
        }
    );
  }

}
