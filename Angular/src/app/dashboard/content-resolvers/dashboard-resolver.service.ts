import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromApp from '../../store/app.reducer';
import * as fromConfigActions from '../../config/store/config.actions';
import {Config} from '../../config/interfaces/config.interfaces';
import {CONFIG_STORE_KEY} from '../../config/constants/config.constants';
import {ConfigState} from '../../config/store/config.state';

@Injectable({ providedIn: 'root' })
export class DashboardResolverService implements Resolve<Config> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // @ts-ignore
    return this.store.select(CONFIG_STORE_KEY).pipe(
      take(1),
      map((configState: ConfigState) => {
        return configState.config;
      }),
      switchMap(config => {
        if (!config) {
          this.store.dispatch(new fromConfigActions.FetchConfig(
            {
              params: {}
            }
          ));
          return this.actions$.pipe(
            ofType(fromConfigActions.SET_CONFIG),
            take(1)
          );
        } else {
          return of(config);
        }
      })
    );
  }
}
