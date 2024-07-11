import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WikipediaResponse } from '../types/wikipedia-response';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  private apiUrl = 'http://localhost:8080/wikipedia/title';

  constructor(private http: HttpClient) { }

  findByTitle(title: string): Observable<WikipediaResponse> {
    const url = `${this.apiUrl}/${encodeURIComponent(title)}`;
    return this.http.get<WikipediaResponse>(url);
  }
}
