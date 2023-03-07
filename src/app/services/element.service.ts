import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { _Element } from '../models/element.model';
import { _Token } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getElements(): Observable<_Element[]> {
    return this.http.get<_Element[]>(this.baseApiUrl + 'api/Element');
  }

  setElements(element: _Element): Observable<_Element> {
    return this.http.post<_Element>(this.baseApiUrl + 'api/Element', element);
  }

  deleteElements(id: string): Observable<_Element> {
    return this.http.delete<_Element>(this.baseApiUrl + 'api/Element/' + id);
  }

  authentication(data: any): Observable<_Token> {
    // 'Authorization': 'token',
    // console.log(this.apiToken)
    const reqHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<_Token>(this.baseApiUrl, data, {
      headers: reqHeaders,
    });
  }
}
