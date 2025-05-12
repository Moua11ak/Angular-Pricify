import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent {
  flightDuration!: number;
  departurePeriod!: string;
  arrivalPeriod!: string;
  airlineCompany!: string;
  destination!: string;
  predictedPrice: number | null = null;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const payload = {
      flight_duration: this.flightDuration,
      departure_period: this.departurePeriod,
      arrival_period: this.arrivalPeriod,
      airline_company: this.airlineCompany,
      destination: this.destination
    };

    this.http.post<any>('http://localhost:5000/predict', payload)
      .subscribe(
        response => {
          this.predictedPrice = response.predicted_price;
        },
        error => {
          console.error('Error:', error);
          alert('Prediction failed. Try again.');
        }
      );
  }
}
