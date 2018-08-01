import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

// This is the router gaurd which helps system to restrict user from
// Access the protected pages without login/authentication
export class AuthGaurd implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  // Check Is user logged in or not
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuth()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
