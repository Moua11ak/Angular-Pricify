import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any = null;
  isProfileMenuOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init(); // 🔥 important
    // Check for logged-in user on component initialization
    this.checkUserLoginStatus();

    // Listen for storage events (login/logout from other tabs)
    window.addEventListener('storage', (event) => {
      if (event.key === 'currentUser') {
        this.checkUserLoginStatus();
      }
    });
  }

  checkUserLoginStatus(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        this.currentUser = JSON.parse(storedUser);
      } catch (e) {
        console.error('Error parsing user data', e);
        this.currentUser = null;
      }
    } else {
      this.currentUser = null;
    }
  }

  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.isProfileMenuOpen = false;
    this.router.navigate(['/home']);
  }

  // Access control methods
  canViewDashboards(): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.role !== 'customer';
  }

  canViewHotelsDashboard(): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.role === 'hotel_manager' ||
      this.currentUser.role === 'agency_manager' ||
      this.currentUser.role === 'product_manager';
  }

  canViewFlightsDashboard(): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.role === 'flight_manager' ||
      this.currentUser.role === 'agency_manager' ||
      this.currentUser.role === 'product_manager';
  }

  canViewAgenciesDashboard(): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.role === 'agency_manager' ||
      this.currentUser.role === 'product_manager';
  }

  canViewProductDashboard(): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.role === 'product_manager';
  }

  canViewTransactionDashboard(): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.role === 'product_manager';
  }

  canViewReports(): boolean {
    if (!this.currentUser) return false;
    return this.currentUser.role !== 'customer';
  }

  // Everyone can view recommendations and predictions
  canViewRecommendations(): boolean {
    return true;
  }

  canViewPredictions(): boolean {
    return true;
  }
}
