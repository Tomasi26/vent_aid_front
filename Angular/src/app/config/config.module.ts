import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigEffects } from './store/config.effects';
import { configReducer } from './store/config.reducer';
import {CONFIG_STORE_KEY} from './constants/config.constants';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CONFIG_STORE_KEY, configReducer),
    EffectsModule.forFeature([ConfigEffects])
  ]
})
export class ConfigModule {}
