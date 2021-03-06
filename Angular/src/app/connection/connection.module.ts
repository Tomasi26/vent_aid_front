import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PairComponent } from './pair/pair.component';
import {MaterialModule} from '../app-material.module';
import {ConnectionRoutingModule} from './connection.routing.module';
import {ConnectionComponent} from './connection.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CONNECTION_STORE_KEY} from './constants/connection.constants';
import {ConnectionEffects} from './store/connection.effects';
import { connectionReducer } from './store/connection.reducer';

@NgModule({
  declarations: [
    ConnectionComponent,
    PairComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConnectionRoutingModule,
    MaterialModule,
    StoreModule.forFeature(CONNECTION_STORE_KEY, connectionReducer),
    EffectsModule.forFeature([ConnectionEffects])
  ]
})
export class ConnectionModule {}
