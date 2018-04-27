import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatGridListModule,
  MatSliderModule,
  MatChipsModule,
  MatDividerModule,
  MatListModule,
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
  MatGridListModule,
  MatSliderModule,
  MatChipsModule,
  MatDividerModule,
  MatListModule,
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
  MatGridListModule,
  MatSliderModule,
  MatChipsModule,
  MatDividerModule,
  MatListModule,
  MatInputModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  ]
})
export class MaterialModule {}