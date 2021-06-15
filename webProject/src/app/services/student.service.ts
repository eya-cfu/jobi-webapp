 import { Injectable } from '@angular/core';
import  {basePath} from  "../constants"; 
import { HttpClient, HttpHeaders, HttpParams, }  from '@angular/common/http';
import { JobApplication } from '../model/jobApplication';
import { Student } from '../Models/student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public defaultHeaders = new HttpHeaders();
  constructor(protected httpClient: HttpClient) { }


  public createStudentForm(student: Student, cv: Blob, picture: Blob): Observable<any> {

    if (student === null || student === undefined) {
        throw new Error('Required parameter student was null or undefined when calling createStudent.');
    }

    if (cv === null || cv === undefined) {
        throw new Error('Required parameter cv was null or undefined when calling createStudent.');
    }

    if (picture === null || picture === undefined) {
        throw new Error('Required parameter picture was null or undefined when calling createStudent.');
    }

    let headers = this.defaultHeaders;

    let formParams: { append(param: string, value: any): void; };
    let useForm = false;
    let convertFormParamsToString = false;

    if (useForm) {
        formParams = new FormData();
    } else {
        formParams = new HttpParams();
    }

    if (student !== undefined) {
        formParams = formParams.append('student', <any>student) as any || formParams;
    }
    if (cv !== undefined) {
        formParams = formParams.append('cv', <any>cv) as any || formParams;
    }
    if (picture !== undefined) {
        formParams = formParams.append('picture', <any>picture) as any || formParams;
    }

    return this.httpClient.request<any>('post',`${basePath}/students`,
        {
            body: convertFormParamsToString ? formParams.toString() : formParams,
            headers: headers,
        }
    );
  }

  public deleteCV(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling deleteCV.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('delete',`${basePath}/students/${encodeURIComponent(String(id))}/cv`,
        {
            headers: headers,
        }
    );
  }

  public deletePic(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling deletePic.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('delete',`${basePath}/students/${encodeURIComponent(String(id))}/pic`,
        {
            headers: headers,
        }
    );
  }

  public deleteStudent(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling deleteStudent.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('delete',`${basePath}/students/${encodeURIComponent(String(id))}`,
        {
            headers: headers,
        }
    );
  }

  public getAllStudents(observe: any = 'body'): Observable<any> {

    let headers = this.defaultHeaders;

    return this.httpClient.request<Student>('get',`${basePath}/students`,
        {
            headers: headers,
        }
    );
  }

  public getApplicationsByStudentId(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getApplicationsByStudentId.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<JobApplication>('get',`${basePath}/student/${encodeURIComponent(String(id))}/applications`,
        {
            headers: headers,
        }
    );
  }

  public getCvByStudentId(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getCvByStudentId.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<Blob>('get',`${basePath}/students/${encodeURIComponent(String(id))}/cv`,
        {
            headers: headers,
        }
    );
  }

  public getPicByStudentId(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getPicByStudentId.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<Blob>('get',`${basePath}/students/${encodeURIComponent(String(id))}/pic`,
        {
            headers: headers,
        }
    );
  }

  public getStudentById(id: number): Observable<any> {

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling getStudentById.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<Student>('get',`${basePath}/students/${encodeURIComponent(String(id))}`,
        {
            headers: headers,
        }
    );
  }

  public updateCV(body: Object, id: number): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling updateCV.');
    }

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling updateCV.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('put',`${basePath}/students/${encodeURIComponent(String(id))}/cv`,
        {
            body: body,
            headers: headers,
        }
    );
  }


  public updatePic(body: Object, id: number): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling updatePic.');
    }

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling updatePic.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('put',`${basePath}/students/${encodeURIComponent(String(id))}/pic`,
        {
            body: body,
            headers: headers,
        }
    );
  }

  public updateStudent(body: Student, id: number): Observable<any> {

    if (body === null || body === undefined) {
        throw new Error('Required parameter body was null or undefined when calling updateStudent.');
    }

    if (id === null || id === undefined) {
        throw new Error('Required parameter id was null or undefined when calling updateStudent.');
    }

    let headers = this.defaultHeaders;

    return this.httpClient.request<any>('put',`${basePath}/students/${encodeURIComponent(String(id))}`,
        {
            body: body,
            headers: headers,
        }
    );
  }

}

