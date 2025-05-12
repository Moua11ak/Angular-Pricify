import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-powerbi',
  templateUrl: './powerbi.component.html',
  styleUrls: ['./powerbi.component.css']
})
export class PowerbiComponent {

  filterPaneEnabled = true;
  navContentPaneEnabled = true;


  constructor(private http: HttpClient) {}

  generateAIReport() {
    // Make sure your backend API is running on this endpoint
    this.http.post('http://localhost:5000/api/generate-report', {
      dashboard: 'Hotels Overview'  // or pass dynamic data if needed
    }).subscribe({
      next: () => alert('AI Report generated and email sent!'),
      error: (err) => alert('Failed to generate report: ' + err.message)
    });
  }
}