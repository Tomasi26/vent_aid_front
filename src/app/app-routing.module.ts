import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/vent', pathMatch: 'full' },
      { path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
      ],
      {onSameUrlNavigation: 'reload',
        useHash: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
