import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightPriceService {

  private apiUrl = 'http://localhost:5000/predict'; // URL de ton API Flask

  constructor(private http: HttpClient) { }

  // Fonction pour envoyer les données et obtenir la prédiction
  predictPrice(flightDetails: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, flightDetails);
  }
}
