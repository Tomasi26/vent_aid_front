import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VentOutputComponent} from './vent-output.component';
import {VentOutputPanelComponent} from './vent-output-panel/vent-output-panel.component';

const routes: Routes = [
  {
    path: '',
    component: VentOutputComponent,
    children: [
      { path: '',
        component: VentOutputPanelComponent,
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VentOutputRoutingModule {}
