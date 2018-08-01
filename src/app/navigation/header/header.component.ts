import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Create Event emitter for the side navigation toggle
  @Output() sideNavToggle = new EventEmitter<void>();

  // Accept input from the component tag
  @Input() isLogin: boolean;

  constructor() { }

  ngOnInit() {
  }

  // Emit the click event for the side bar
  onToggleIt() {
    this.sideNavToggle.emit();
  }
}
