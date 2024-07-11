import { Component, Input, SimpleChanges } from '@angular/core';
import { ChatGptService } from 'src/app/helpers/chatgpt.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'fsss-trip-plan',
  templateUrl: './trip-plan.component.html',
  styleUrl: './trip-plan.component.less'
})
export class TripPlanComponent {
  @Input() tripDetails: { cityName: string, days: number } | null = null;
  plan: any = '';
  errorMessage: string = '';


  constructor(private chatGptService: ChatGptService, private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tripDetails) {
      console.log("trip details: ", this.tripDetails);
      this.getTripPlan();
    }
  }

  getTripPlan(): void {
    const question = `Plan a trip to ${this.tripDetails.cityName} for ${this.tripDetails.days} days. Return only div (bold font) with paragraphs .`;
    this.chatGptService.helloWorldPost(question).subscribe({
      next: (response: string) => {
        this.plan = this.sanitizer.bypassSecurityTrustHtml(response);
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'Error fetching trip plan from ChatGPT.';
        console.log('ChatGPT error:', error);
      }
    });
  }

  closeModal(): void {
    this.plan = '';
  }
}
