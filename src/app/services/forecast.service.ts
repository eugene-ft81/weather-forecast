import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as forecastJson from '../../assets/mock-data/forecast.json';

import { environment } from 'src/environments/environment.js';

const apiKey: string = environment.apiKey;
const apiUrl: string = environment.apiUrl;

const forecastMock: any = (forecastJson as any).default;

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  getForecast(location) {
    // location = 'London,gb';
    return this.http.get(`${apiUrl}/forecast?q=${location}&appid=${apiKey}`)
    // return of(forecastMock)
      .pipe(map((response: any) => ({
          list: response.list,
          city: response.city
        })
      ));
  }

  getCurrentLocForecast(coordinates) {
    // location = 'London,gb';
    return this.http.get(`${apiUrl}/forecast?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}`)
    // return of(forecastMock)
      .pipe(map((response: any) => ({
          list: response.list,
          city: response.city
        })
      ));
  }
}
