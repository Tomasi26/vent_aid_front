import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'connection',
          loadChildren: () => import('./connection/connection.module').then(connectionModule => connectionModule.ConnectionModule)},
        { path: 'admin',
          loadChildren: () => import('./admin/admin.module').then(adminModule => adminModule.AdminModule)}
      ],
      {onSameUrlNavigation: 'reload',
        useHash: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
