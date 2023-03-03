import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { _Element } from '../models/element.model';

@Injectable({
  providedIn: 'root',
})
export class ElementService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getElements(): Observable<_Element[]> {
    return this.http.get<_Element[]>(this.baseApiUrl + 'api/Element');
  }
}
