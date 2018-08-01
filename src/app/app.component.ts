import { Component, ViewChildren, QueryList } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChildren('mobileMenu') sc: QueryList<MatSidenavModule>;
  isUserLogin: boolean = true;
}
