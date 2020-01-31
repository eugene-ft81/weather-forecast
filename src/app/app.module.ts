import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatListModule
} from '@angular/material';

import { StoreModule } from '@ngrx/store';

import { locationReducer } from './location-reducer';

import { ForecastService } from './services/forecast.service';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { LocationComponent } from './location/location.component';
import { ForecastComponent } from './forecast/forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LocationComponent,
    ForecastComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,

    StoreModule.forRoot({
      locState: locationReducer
    }),

    AppRoutingModule
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
