import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PairComponent} from './pair/pair.component';
import {ConnectionComponent} from './connection.component';
import {ConnectionGuard} from './guards/connection.guard';

const routes: Routes = [
  {
    path: '',
    component: ConnectionComponent,
    canActivate: [ConnectionGuard],
    children: [
      { path: '', component: PairComponent },
      { path: 'pair', component: PairComponent },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ConnectionRoutingModule {}
