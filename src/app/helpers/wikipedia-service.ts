import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WikipediaResponse } from '../types/wikipedia-response';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  private apiUrl =`${environment.backendBaseUrl}/wikipedia/title`;

  constructor(private http: HttpClient) { }

  findByTitle(title: string): Observable<WikipediaResponse> {
    const url = `${this.apiUrl}/${encodeURIComponent(title)}`;
    return this.http.get<WikipediaResponse>(url);
  }
}
