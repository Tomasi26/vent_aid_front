import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DashboardConfigComponent} from './dashboard-config/dashboard-config.component';
import {DashboardPanelComponent} from './dashboard-panel/dashboard-panel.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '',
        component: DashboardConfigComponent,
      },
      { path: 'panel',
        component: DashboardPanelComponent,
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
export class DashboardRoutingModule {}
