import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';

import { ForecastService } from '../services/forecast.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  currentLoc: any;

  forecastPoints: any;
  forecastCity: any;
  error: string;

  constructor(
    private store: Store<any>,
    private service: ForecastService) {

      this.loc$ = this.store.pipe(select('locState'));
      this.loc$
      // .pipe(filter(Boolean))
      .subscribe((locState: any) => {
        if (locState !== undefined) {
          this.loc = locState.location;
          this.currentLoc = locState.currentLocation;
        }
        if (this.loc !== undefined && this.currentLoc === undefined) {
          this.getForecast(locState.location);
          return;
        }
        if (this.loc === undefined && this.currentLoc !== undefined) {
          this.getCurrentLocForecast(locState.currentLocation);
          return;
        }
      });
    }

  ngOnInit() {
  }

  getForecast(location) {
    this.error = '';
    this.service.getForecast(location).subscribe(
      forecast => {
        this.forecastPoints = forecast.list;
        this.forecastCity = forecast.city;
      },
      errorResponse => {
        console.log(errorResponse);
        this.error = errorResponse.error.message;
      }
    );
  }

  getCurrentLocForecast(coordinates) {
    this.error = '';
    this.service.getCurrentLocForecast(coordinates).subscribe(
      forecast => {
        this.forecastPoints = forecast.list;
        this.forecastCity = forecast.city;
      },
      errorResponse => {
        console.log(errorResponse);
        this.error = errorResponse.error.message;
      }
    );
  }

}
