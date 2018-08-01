import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit, OnDestroy {

  // Event emitter for the side nav close
  @Output() closeSideNav = new EventEmitter<void>();
  isAuth: boolean;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Get is user athorised or not
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    })
  }

  // Collapse the side navigation
  onCloseSideNav() {
    this.closeSideNav.emit();
  }

  // Unsubscribe the current subscription for the user and release the reserve memory space
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  // User logout event
  onSignOut() {
    this.onCloseSideNav();
    this.authService.logout();
  }
}
