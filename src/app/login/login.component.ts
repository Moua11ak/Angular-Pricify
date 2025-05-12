import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignUpMode = false;
  isLoading = false;
  showPassword = false;
  showConfirmPassword = false;
  rememberMe = false;
  agreeToTerms = false;
  errorMessage = '';
  successMessage = '';
  passwordStrength = 0;
  passwordStrengthText = '';

  // Define available roles
  availableRoles = [
    { id: 'hotel_manager', name: 'Hotel Manager' },
    { id: 'flight_manager', name: 'Flight Manager' },
    { id: 'agency_manager', name: 'Agency Manager' },
    { id: 'product_manager', name: 'Product Manager' },
    { id: 'customer', name: 'Customer' }
  ];

  loginData = {
    email: '',
    password: ''
  };

  signUpData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer' // Default role
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Check if there's a stored user
    const storedUser = localStorage.getItem('rememberedUser');
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        this.loginData.email = userData.email;
        this.rememberMe = true;
      } catch (e) {
        console.error('Error parsing stored user data', e);
      }
    }
  }

  toggleFormMode(): void {
    this.isSignUpMode = !this.isSignUpMode;
    this.errorMessage = '';
    this.successMessage = '';
    this.resetPasswordStrength();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  toggleRememberMe(): void {
    this.rememberMe = !this.rememberMe;
  }

  toggleAgreeToTerms(): void {
    this.agreeToTerms = !this.agreeToTerms;
  }

  checkPasswordStrength(): void {
    const password = this.isSignUpMode ? this.signUpData.password : this.loginData.password;

    // Reset strength for empty password
    if (!password) {
      this.passwordStrength = 0;
      this.passwordStrengthText = '';
      return;
    }

    let strength = 0;

    // Length check
    if (password.length >= 8) strength += 25;

    // Uppercase check
    if (/[A-Z]/.test(password)) strength += 25;

    // Number check
    if (/[0-9]/.test(password)) strength += 25;

    // Special character check
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;

    this.passwordStrength = strength;

    // Set text based on strength
    if (strength <= 25) {
      this.passwordStrengthText = 'Weak password';
    } else if (strength <= 50) {
      this.passwordStrengthText = 'Fair password';
    } else if (strength <= 75) {
      this.passwordStrengthText = 'Good password';
    } else {
      this.passwordStrengthText = 'Strong password';
    }
  }

  resetPasswordStrength(): void {
    this.passwordStrength = 0;
    this.passwordStrengthText = '';
  }

  socialSignIn(provider: string): void {
    console.log(`Signing in with ${provider}`);
    // Implementation would connect to OAuth providers
    this.errorMessage = `${provider} sign-in is not implemented yet`;
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.isLoading = true;

    // Mock API call - In real app, this would be a service call
    setTimeout(() => {
      const users = this.getUsers();
      const user = users.find(u =>
        u.email === this.loginData.email && u.password === this.loginData.password
      );

      if (user) {
        // Handle successful login
        this.successMessage = 'Login successful!';
        setTimeout(() => {
          this.router.navigate(['/home']);  // Changed from redirectBasedOnRole()
        }, 300);

        // Store the current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify({
          username: user.username,
          email: user.email,
          role: user.role
        }));

        // If remember me is checked, store user email
        if (this.rememberMe) {
          localStorage.setItem('rememberedUser', JSON.stringify({
            email: this.loginData.email
          }));
        } else {
          localStorage.removeItem('rememberedUser');
        }

        // Redirect based on user role
        setTimeout(() => {
          this.redirectBasedOnRole(user.role);
        }, 300);
      } else {
        this.errorMessage = 'Invalid email or password';
      }

      this.isLoading = false;
    }, 1500);
  }

  onSignUp(): void {
    this.errorMessage = '';
    this.successMessage = '';

    // Validation
    if (!this.signUpData.username || !this.signUpData.email ||
      !this.signUpData.password || !this.signUpData.confirmPassword) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    if (this.signUpData.password !== this.signUpData.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    if (this.passwordStrength < 50) {
      this.errorMessage = 'Please use a stronger password';
      return;
    }

    if (!this.agreeToTerms) {
      this.errorMessage = 'You must agree to the Terms and Privacy Policy';
      return;
    }

    this.isLoading = true;

    // Mock API call - In real app, this would be a service call
    setTimeout(() => {
      const users = this.getUsers();

      // Check if email already exists
      if (users.some(u => u.email === this.signUpData.email)) {
        this.errorMessage = 'Email is already registered';
        this.isLoading = false;
        return;
      }

      // Add new user
      const newUser = {
        username: this.signUpData.username,
        email: this.signUpData.email,
        password: this.signUpData.password,
        role: this.signUpData.role
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      // Set current user
      localStorage.setItem('currentUser', JSON.stringify({
        username: newUser.username,
        email: newUser.email,
        role: newUser.role
      }));

      this.successMessage = 'Account created successfully!';

      // Redirect based on user role
      setTimeout(() => {
        this.redirectBasedOnRole(newUser.role);
      }, 1500);

      this.isLoading = false;
    }, 1500);
  }
  redirectBasedOnRole(role: string): void {
    switch (role) {
      case 'hotel_manager':
        this.router.navigate(['/hotel-dashboard']);
        break;
      case 'flight_manager':
        this.router.navigate(['/flight-dashboard']);
        break;
      case 'agency_manager':
        this.router.navigate(['/agency-dashboard']);
        break;
      case 'product_manager':
        this.router.navigate(['/product-dashboard']);
        break;
      case 'customer':
        this.router.navigate(['/customer-dashboard']);
        break;
      default:
        this.router.navigate(['/home']);
    }
  }



  private getUsers(): any[] {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  }
}
