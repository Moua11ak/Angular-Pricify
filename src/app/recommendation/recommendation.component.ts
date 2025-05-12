import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {
  searchQuery = '';
  numResults = 3;
  results: any[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  searchHotels() {
    if (!this.searchQuery) return;

    this.loading = true;
    this.error = '';
    this.results = [];

    this.http.post('http://localhost:5000/recommend', {
      query: this.searchQuery,
      num_results: this.numResults
    }).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.results = response.results;
        } else {
          this.error = response.error || 'Unknown error occurred';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message || 'Failed to connect to server';
        this.loading = false;
      }
    });
  }
}
