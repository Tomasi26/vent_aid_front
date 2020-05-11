import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import {ConnectionService} from '../service/connection.service';
import {CONNECTION_STORE_KEY} from '../constants/connection.constants';

@Injectable({ providedIn: 'root' })
export class ConnectionGuard implements CanActivate {
  constructor(
    private connectionService: ConnectionService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return this.store.select(CONNECTION_STORE_KEY).pipe(
      take(1),
      map(connectionState => {
        console.log('REPLACE THE ADMIN AND CONNECTION GUARDS!');
        return connectionState.device;
      }),
      map(device => {
        const isConnect = !!device;
        if (!isConnect) {
          return true;
        }
        return this.router.createUrlTree(['/admin/dashboard']);
      })
    );
  }
}
