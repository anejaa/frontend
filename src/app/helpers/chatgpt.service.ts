import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {

  private apiUrl = `${environment.backendBaseUrl}/gpt/askchatgpt`;

  constructor(private http: HttpClient) { }

  helloWorldPost(question: string): Observable<string> {
    const url = `${this.apiUrl}/${encodeURIComponent(question)}`;
    return this.http.get(url, { responseType: 'text' });
  }
}
