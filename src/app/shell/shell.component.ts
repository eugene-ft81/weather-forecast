import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  currentLoc: any;

  constructor(private store: Store<any>) {
    this.loc$ = store.pipe(select('locState'));
    this.loc$
    // .pipe(filter(Boolean))
    .subscribe((locState: any) => {
      if (locState !== undefined) {
        this.loc = locState.location;
        this.currentLoc = locState.currentLocation;
      }
    });
  }

  ngOnInit() {
  }

}
