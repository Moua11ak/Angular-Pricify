import { Component } from '@angular/core';
import { FlightPriceService } from '../flight-price.service';

@Component({
  selector: 'app-flight-price-form',
  templateUrl: './flight-price-form.component.html',
  styleUrls: ['./flight-price-form.component.css']
})
export class FlightPriceFormComponent {
  flightDetails = {
    flight_duration: 120,
    departure_period: 'Morning',
    arrival_period: 'Afternoon',
    airline_company: 'Air France',
    destination: 'Paris'
  };

  predictedPrice: number | null = null;

  constructor(private flightPriceService: FlightPriceService) { }

  // Soumettre les détails du vol pour obtenir la prédiction
  onSubmit(): void {
    this.flightPriceService.predictPrice(this.flightDetails).subscribe({
      next: (data) => {
        this.predictedPrice = data.predicted_price_usd;
      },
      error: (err) => {
        console.error('Erreur lors de la prédiction:', err);
      }
    });
  }
}
