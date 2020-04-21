// core
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

// router
import {ActivatedRoute, Router} from '@angular/router';

// store
import {select, Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromConfigState from '../../config/store/config.state';
import * as fromConfigActions from '../../config/store/config.actions';
import * as fromConfigSelectors from '../../config/store/config.selectors';
import * as fromDashboardState from '../store/dashboard.state';
import * as fromDashboardSelectors from '../store/dashboard.selectors';

// rxjs
import {Subscription} from 'rxjs';

// message
import {Message} from '../../messages/message.model';
import {Config} from '../../config/interfaces/config.interfaces';
import {VentMode} from '../dashboard.enums';

@Component({
  selector: 'app-dashboard-panel',
  styleUrls: ['dashboard-panel.component.scss'],
  templateUrl: 'dashboard-panel.component.html',
  encapsulation: ViewEncapsulation.None
})

export class DashboardPanelComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

  // config store
  config: Config;
  configLoading = false;
  configError: Message = null;
  configSuccess: Message = null;
  configSub: Subscription;
  configLoadingSub: Subscription;
  configErrorSub: Subscription;
  configSuccessSub: Subscription;

  // dashboard store
  mode: VentMode;
  controls: {};
  sensors: {};
  dashboardLoading = false;
  dashboardError: Message = null;
  dashboardSuccess: Message = null;
  modeSub: Subscription;
  controlsSub: Subscription;
  sensorsSub: Subscription;
  dashboardLoadingSub: Subscription;
  dashboardErrorSub: Subscription;
  dashboardSuccessSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    private configStore: Store<fromConfigState.ConfigState>,
    private dashboardStore: Store<fromDashboardState.DashboardState>,
  ) {}

  ngOnInit() {

    // subscribe to config state
    this.subscribeConfigStateObservables();

    // subscribe to dashboard state
    this.subscribeDashboardStateObservables();

    this.store.dispatch(new fromConfigActions.FetchConfig({
      params: {}
    }));
  }

  // dashboard state
  subscribeDashboardStateObservables() {

    // mode
    this.modeSub = this.dashboardStore.pipe(
      select(fromDashboardSelectors.selectMode)
    ).subscribe(mode => {
      this.mode = mode;
    });

    // controls
    this.controlsSub = this.dashboardStore.pipe(
      select(fromDashboardSelectors.selectControls)
    ).subscribe(controls => {
      this.controls = controls;
    });

    // sensors
    this.sensorsSub = this.dashboardStore.pipe(
      select(fromDashboardSelectors.selectSensors)
    ).subscribe(sensors => {
      this.sensors = sensors;
    });

    // loading
    this.dashboardLoadingSub = this.dashboardStore.pipe(
      select(fromDashboardSelectors.selectDashboardLoading)
    ).subscribe(dashboardLoading => {
      this.dashboardLoading = dashboardLoading;
    });

    // success message
    this.dashboardSuccessSub = this.dashboardStore.pipe(
      select(fromDashboardSelectors.selectDashboardSuccess)
    ).subscribe(dashboardSuccess => {
      this.dashboardSuccess = dashboardSuccess;
    });

    // error message
    this.dashboardErrorSub = this.dashboardStore.pipe(
      select(fromDashboardSelectors.selectDashboardError)
    ).subscribe(dashboardError => {
      this.dashboardError = dashboardError;
    });

  }

  unsubscribeDashboardStateObservables() {

    if (this.modeSub) {
      this.modeSub.unsubscribe();
    }
    if (this.controlsSub) {
      this.controlsSub.unsubscribe();
    }
    if (this.sensorsSub) {
      this.sensorsSub.unsubscribe();
    }
    if (this.dashboardLoadingSub){
      this.dashboardLoadingSub.unsubscribe();
    }
    if (this.dashboardSuccessSub){
      this.dashboardSuccessSub.unsubscribe();
    }
    if (this.dashboardErrorSub){
      this.dashboardErrorSub.unsubscribe();
    }

  }

  // config state
  subscribeConfigStateObservables() {

    // config
    this.configSub = this.configStore.pipe(
      select(fromConfigSelectors.selectConfig)
    ).subscribe(config => {
      this.config = config;
    });

    // loading
    this.configLoadingSub = this.configStore.pipe(
      select(fromConfigSelectors.selectConfigLoading)
    ).subscribe(configLoading => {
      this.configLoading = configLoading;
    });

    // success message
    this.configSuccessSub = this.configStore.pipe(
      select(fromConfigSelectors.selectConfigSuccess)
    ).subscribe(configSuccess => {
      this.configSuccess = configSuccess;
    });

    // error message
    this.configErrorSub = this.configStore.pipe(
      select(fromConfigSelectors.selectConfigError)
    ).subscribe(configError => {
      this.configError = configError;
    });

  }

  unsubscribeConfigStateObservables() {

    if (this.configSub) {
      this.configSub.unsubscribe();
    }
    if (this.configLoadingSub){
      this.configLoadingSub.unsubscribe();
    }
    if (this.configSuccessSub){
      this.configSuccessSub.unsubscribe();
    }
    if (this.configErrorSub){
      this.configErrorSub.unsubscribe();
    }

  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
  }

  ngOnDestroy() {
    // unsubscribe to config state
    this.unsubscribeConfigStateObservables();

    // unsubscribe to vent output state
    this.unsubscribeDashboardStateObservables();
  }

}
