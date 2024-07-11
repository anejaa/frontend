import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { Geometry } from 'src/app/types/location-response';

@Component({
  selector: 'fsss-map',
  standalone: false,
  templateUrl: './map.component.html',
  styleUrl: './map.component.less'
})
export class MapComponent implements OnChanges { 
  private map: L.Map | undefined;
  constructor() { }
  @Input() coordinates: Geometry;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([46.0500268, 14.5069289], 13);  // Uporabite začetne koordinate in povečavo

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.coordinates);
    if(this.coordinates) {
      this.map.setView([this.coordinates.lat, this.coordinates.lng], 11); 

      var myIcon = L.icon({
        iconUrl: '../../../../assets/images/map.png',
        iconSize: [89, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });
      L.marker([this.coordinates.lat, this.coordinates.lng], {icon: myIcon}).addTo(this.map);
    }
    
  }
}
