import { Component, Output, EventEmitter } from '@angular/core';
import { LocationService } from '../../helpers/location.service';
import { LocationResponse } from 'src/app/types/location-response';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.less']
})
export class SearchLocationComponent {
  cityName: string = '';
  coordinates: { lat: number; lng: number } | null = null;
  errorMessage: string = '';
  @Output() locationFound = new EventEmitter<{ lat: number, lng: number }>();
  @Output() cityNameChanged = new EventEmitter<string>();

  constructor(private locationService: LocationService) { }

  searchCity(): void {
    if (this.cityName) {
      this.locationService.getCoordinates(this.cityName).subscribe({
        next: (response: LocationResponse) => {
          console.log('Response received:', response);
          if (response.results && response.results.length > 0) {
            const geometry = response.results[0].geometry;
            this.coordinates = {
              lat: geometry.lat,
              lng: geometry.lng
            };
            this.errorMessage = '';
            this.locationFound.emit(this.coordinates);
            this.cityNameChanged.emit(this.cityName);
          } else {
            this.errorMessage = 'City not found!';
            this.coordinates = null;
          }
        },
        error: (error) => {
          this.errorMessage = 'City not found!';
          this.coordinates = null;
        }
      });
    } else {
      this.errorMessage = 'Please enter a city name.';
      this.coordinates = null;
    }
  }
}
