import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { WikipediaService } from 'src/app/helpers/wikipedia-service';
import { WikipediaResponse } from 'src/app/types/wikipedia-response';

@Component({
  selector: 'fsss-town-info',
  templateUrl: './town-info.component.html',
  styleUrl: './town-info.component.less'
})
export class TownInfoComponent implements OnChanges {
  @Input() cityName: string = "";
  text: string = "";
  errorMessage: string = "";
  tripDays: number = 0;
  @Output() tripPlanned = new EventEmitter<{ cityName: string, days: number }>();

  constructor(private wikipediaService: WikipediaService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cityName) {
      this.fetchTownInfo();
    }
  }

  fetchTownInfo(): void {
    this.wikipediaService.findByTitle(this.cityName).subscribe({
      next: (response: WikipediaResponse) => {
        console.log('Response received:', response);
        if (response.length > 0 && response[0].opening_text) {
          console.log("opening text", response[0].opening_text);
          this.text = response[0].opening_text;
          this.errorMessage = '';
        } else {
          this.errorMessage = 'No opening text found for this city.';
        }
      },
      error: (error) => {
        this.errorMessage = 'Error fetching town info from Wikipedia.';
        console.log('Wikipedia error:', error);
      }
    });
  }

  closeModal(): void {
    this.text = '';
  }

  planTrip(): void {
    if (this.tripDays > 0) {
      this.tripPlanned.emit({ cityName: this.cityName, days: this.tripDays });
    } else {
      this.errorMessage = 'Please enter a valid number of days.';
    }
  }
}
