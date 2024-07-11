import { Component, OnInit } from '@angular/core';
import { Geometry } from 'src/app/types/location-response';

@Component({
  selector: 'app-home-view',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.less']
})
export class HomeView implements OnInit {
  coordinates: Geometry;
  cityName: string;
  tripDetails: { cityName: string, days: number } | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onLocationFound(coordinates: Geometry) {
    this.coordinates = coordinates;
  }

  onCityNameChanged(name: string) {
    this.cityName = name;
  }

  onTripPlanned(details: { cityName: string, days: number }) {
    this.tripDetails = details;
  }
}
