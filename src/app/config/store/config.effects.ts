import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {switchMap, map, catchError} from 'rxjs/operators';

import * as DashboardActions from './config.actions';
import * as fromApp from '../../store/app.reducer';
import {of, throwError} from 'rxjs';
import {ConfigService} from '../service/config.service';
import { GetConfigParams, GetConfigResponse } from '../interfaces/config.interfaces';


@Injectable()
export class ConfigEffects {

  // read
  @Effect()
  fetchDashboard = this.actions$.pipe(
    ofType(DashboardActions.FETCH_CONFIG),
    switchMap((fetchDashboardData: DashboardActions.FetchConfig) => {

      return this.dashboardService.getConfig(fetchDashboardData.payload.params)
        .pipe(
          switchMap((dashboardResponse: GetConfigResponse) => {

            if (dashboardResponse.config) {
              return of(dashboardResponse.config);
            } else {
              return throwError('Error Getting Vent Output');
            }
          }),
          map(config => {
            return new DashboardActions.SetConfig({
              config
            });
          }),
          catchError(errorRes => {
            return this.handleDashboardError(errorRes);
          })
        );
    })
  );


  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>,
    private dashboardService: ConfigService
  ) {}


  private handleDashboardError(error: any) {
    return of(new DashboardActions.ConfigFailure({
      errorMessage: error
    }));
  }

}
