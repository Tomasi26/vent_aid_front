import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {switchMap, map, catchError} from 'rxjs/operators';

import * as VentOutputActions from './vent-output.actions';
import * as fromApp from '../../store/app.reducer';
import {of, throwError} from 'rxjs';
import {VentOutputService} from '../service/vent-output.service';
import {
  VentOutputResponse,
  VentOutputParams
} from '../interfaces/vent-output.interfaces';


@Injectable()
export class VentOutputEffects {

  // read
  @Effect()
  fetchRoles = this.actions$.pipe(
    ofType(VentOutputActions.FETCH_VENT_OUTPUT),
    switchMap((fetchRolesData: VentOutputActions.FetchVentOutput) => {

      return this.ventOutputService.getVentOutput(fetchRolesData.payload.params)
        .pipe(
          switchMap((ventOutputResponse: VentOutputResponse) => {

            if (ventOutputResponse.output) {
              return of(ventOutputResponse.output);
            } else {
              return throwError('Error Getting Vent Output');
            }
          }),
          map(ventOutput => {
            return new VentOutputActions.SetVentOutput({
              output: ventOutput
            });
          }),
          catchError(errorRes => {
            return this.handleVentOutputError(errorRes);
          })
        );
    })
  );


  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>,
    private ventOutputService: VentOutputService
  ) {}


  private handleVentOutputError(error: any) {
    return of(new VentOutputActions.VentOutputFailure({
      errorMessage: error
    }));
  }

}
