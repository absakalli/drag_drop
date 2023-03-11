import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { _Element } from '../models/element.model';
import { _Data } from '../models/data.model';
import { _Token } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class WebApiService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getElements(token: string): Observable<_Element[]> {
    const reqHeaders = new HttpHeaders({
      Authorization: 'bearer ' + token,
      'Content-Type': 'application/json',
    });
    return this.http.get<_Element[]>(this.baseApiUrl + 'api/PageItem', {
      headers: reqHeaders,
    });
  }

  setElements(element: _Element, token: string): Observable<_Element> {
    const reqHeaders = new HttpHeaders({
      Authorization: 'bearer ' + token,
      'Content-Type': 'application/json',
    });
    return this.http.post<_Element>(this.baseApiUrl + 'api/PageItem', element, {
      headers: reqHeaders,
    });
  }

  deleteElements(id: string, token: string): Observable<_Element> {
    const reqHeaders = new HttpHeaders({
      Authorization: ' bearer ' + token,
      'Content-Type': 'application/json',
    });
    return this.http.delete<_Element>(this.baseApiUrl + 'api/PageItem/' + id, {
      headers: reqHeaders,
    });
  }

  authentication(data: any): Observable<_Token> {
    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<_Token>(this.baseApiUrl + 'api/Login/Token', data, {
      headers: reqHeaders,
    });
  }
}
