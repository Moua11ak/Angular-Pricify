import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  constructor(private http: HttpClient) {}

  // Method to download report for each section
  downloadReport(sectionIndex: number) {
    // In a real-world scenario, you would replace this with your actual report URLs or backend endpoint
    const reportUrls = [
      './assets/pdf/Hotel Graph interpretation.pdf',
      './assets/pdf/FlightsGraph interpretation.pdf',
      './assets/pdf/Agencies Graph interpretation (1).pdf',
      './assets/pdf/Transactions Graph interpretation.pdf'
    ];

    // Check if the section index is valid
    if (sectionIndex >= 0 && sectionIndex < reportUrls.length) {
      const reportUrl = reportUrls[sectionIndex];

      // Use HttpClient to download the file
      this.http.get(reportUrl, { responseType: 'blob' }).subscribe(
        (response: Blob) => {
          // Create a blob URL and trigger download
          const blob = new Blob([response], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `report-${sectionIndex + 1}.pdf`;
          link.click();

          // Clean up
          window.URL.revokeObjectURL(url);
        },
        (error) => {
          console.error('Error downloading report:', error);
          // Optional: Show user-friendly error message
          alert('Failed to download report. Please try again.');
        }
      );
    }
  }

}
