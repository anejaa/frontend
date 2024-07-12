import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationResponse } from '../types/location-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiUrl = `${environment.backendBaseUrl}/get-location/get-location`;

  constructor(private http: HttpClient) { }

  getCoordinates(cityName: string): Observable<LocationResponse> {
    let params = new HttpParams().set('name', cityName);
    return this.http.get<LocationResponse>(this.apiUrl, { params });
  }
}
