import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {switchMap, map, catchError} from 'rxjs/operators';

import * as DashboardActions from './dashboard.actions';
import * as fromApp from '../../store/app.reducer';
import {of, throwError} from 'rxjs';
import {DashboardService} from '../service/dashboard.service';
import {VentData} from '../model/vent-data.model';
import * as ConnectionActions from '../../connection/store/connection.actions';
import {Message} from '../../messages/message.model';
import {MessageType} from '../../messages/message-type.enum';


@Injectable()
export class DashboardEffects {

  // fetch data
  @Effect()
  fetchData = this.actions$.pipe(
    ofType(DashboardActions.FETCH_DATA),
    switchMap((fetchDashboardData: DashboardActions.FetchData) => {

      return this.dashboardService.fetchDataFromVent(fetchDashboardData.payload.data)
        .pipe(
          switchMap((dataResponse: VentData) => {
            if (dataResponse) {
              return of(dataResponse);
            } else {
              return throwError('Error Fetch Data');
            }
          }),
          map(data => {
            return new DashboardActions.SetData({
              data
            });
          }),
          catchError(errorRes => {
            return this.handleDashboardError(
              DashboardActions.FETCH_DATA,
              errorRes.error && errorRes.error.err ? errorRes.error.err : 'Error Fetch Data'
            );
          })
        );
    })
  );

  // update data
  @Effect()
  updateData = this.actions$.pipe(
    ofType(DashboardActions.UPDATE_DATA),
    switchMap((fetchDashboardData: DashboardActions.UpdateData) => {

      return this.dashboardService.updateDataToVent(fetchDashboardData.payload.data)
        .pipe(
          switchMap((dataResponse: VentData) => {
            if (dataResponse) {
              return of(dataResponse);
            } else {
              return throwError('Error Update Data');
            }
          }),
          map(data => {
            return new DashboardActions.SetData({
              data
            });
          }),
          catchError(errorRes => {
            return this.handleDashboardError(
              DashboardActions.UPDATE_DATA,
              errorRes.error && errorRes.error.err ? errorRes.error.err : 'Error Update Data'
            );
          })
        );
    })
  );


  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>,
    private dashboardService: DashboardService
  ) {}

  private handleDashboardError(action: any, errorMessage: any) {
    return of(new DashboardActions.DashboardFailure({
      errorMessage: new Message(action, MessageType.ERROR, {
        defaultMessage: errorMessage
      })
    }));
  }

}
