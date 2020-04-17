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
import * as fromVentOutputActions from '../store/vent-output.actions';
import {VentOutput} from '../model/vent-output.model';
import {VENT_OUTPUT_STORE_KEY} from '../constants/vent-output.constants';
import {VentOutputState} from '../store/vent-output.state';

@Injectable({ providedIn: 'root' })
export class VentOutputResolverService implements Resolve<VentOutput> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // @ts-ignore
    return this.store.select(VENT_OUTPUT_STORE_KEY).pipe(
      take(1),
      map((ventOutputState: VentOutputState) => {
        return ventOutputState.ventOutput;
      }),
      switchMap(ventOutput => {
        if (!ventOutput) {
          this.store.dispatch(new fromVentOutputActions.FetchVentOutput(
            {
              params: {
                filter: {
                  bpm: true,
                  compressionPercentage: true,
                  pressureAbsolute: true,
                  inspiriumPressure: true
                }
              }
            }
          ));
          return this.actions$.pipe(
            ofType(fromVentOutputActions.SET_VENT_OUTPUT),
            take(1)
          );
        } else {
          return of(ventOutput);
        }
      })
    );
  }
}
