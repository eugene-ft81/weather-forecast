import { Store } from '@ngrx/store';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SET_LOCATION, SET_CURRENT_LOCATION } from '../location-reducer';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  loc: string;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.getCurrentLocation();
  }

  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.store.dispatch({ type: SET_LOCATION, payload: this.loc });
  }

  private getCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.store.dispatch({ type: SET_CURRENT_LOCATION, payload: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            zoom: 15,
          }
        });
      });
    }
  }

}
