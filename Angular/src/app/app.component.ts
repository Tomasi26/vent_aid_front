import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromApp from './store/app.reducer';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
