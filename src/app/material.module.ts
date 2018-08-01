import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';


@NgModule({
    // Import the necessary material ui components
    imports: [
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule
    ],
    exports: [
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule
    ]
})

export class MaterialModule {}
