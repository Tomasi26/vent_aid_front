import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DashboardRoutingModule} from './dashboard.routing.module';
import {MaterialModule} from '../app-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DashboardComponent} from './dashboard.component';
import {DashboardConfigComponent} from './dashboard-config/dashboard-config.component';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {DashboardEffects} from './store/dashboard.effects';
import {dashboardReducer} from './store/dashboard.reducer';
import {DashboardPanelComponent} from './dashboard-panel/dashboard-panel.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DASHBOARD_STORE_KEY} from './dashboard.constants';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature(DASHBOARD_STORE_KEY, dashboardReducer),
    EffectsModule.forFeature([DashboardEffects])
  ],
  exports: [
    DashboardConfigComponent
  ],
  declarations: [
    DashboardComponent,
    DashboardConfigComponent,
    DashboardPanelComponent
  ]
})

export class DashboardModule {}
