import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//SERVICES
import { AuthGuard } from './../shared/auth/auth.guard';

//COMPONENTS
import { RoleComponent } from './role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailsComponent } from './role-details/role-details.component';

const ROUTES: Routes = [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
        {
            path: 'roles',
            component: RoleListComponent,
            canLoad: [AuthGuard],
        },
        {
            path: ':action/:id',
            component: RoleDetailsComponent,
            canLoad: [AuthGuard]
        }
    ]
}
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class RoleRoutingModule {}