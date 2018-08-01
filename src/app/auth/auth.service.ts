import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
  private user: User; // This object only use by the service
  authChange = new Subject<boolean>();

  constructor(private router: Router) {}

  // Register the new user
  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }
    this.onSuccessfullyAuth();
  };

  // Login the valid user
  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }
    this.onSuccessfullyAuth();
  };

  // Logout user from the app
  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  // Get the current login user
  getCurrentUser() {
    // Spread operator breaks the reference with User object and create new object So
    // if any change apply from another module
    // then it will not affect the current user object
    return {...this.user};
  }

  // Return whether user is login or not
  isAuth() {
    return this.user != null;
  }

  // Successfully Login / Register
  onSuccessfullyAuth() {
    this.authChange.next(true);
    this.router.navigate(['/']);
  }
}
