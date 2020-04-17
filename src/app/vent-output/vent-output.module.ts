import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {VentOutputRoutingModule} from './vent-output.routing.module';
import {MaterialModule} from '../app-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {VentOutputComponent} from './vent-output.component';
import {VentOutputPanelComponent} from './vent-output-panel/vent-output-panel.component';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {VentOutputEffects} from './store/vent-output.effects';
import {ventOutputReducer} from './store/vent-output.reducer';
import {VENT_OUTPUT_STORE_KEY} from './constants/vent-output.constants';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    VentOutputRoutingModule,
    MaterialModule,
    StoreModule.forFeature(VENT_OUTPUT_STORE_KEY, ventOutputReducer),
    EffectsModule.forFeature([VentOutputEffects])
  ],
  exports: [
    VentOutputPanelComponent
  ],
  declarations: [
    VentOutputComponent,
    VentOutputPanelComponent
  ]
})

export class VentOutputModule {}
