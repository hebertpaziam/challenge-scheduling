import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from './role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailsComponent } from './role-details/role-details.component';

import { AuthGuard } from './../shared/auth/auth.guard';

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

export const roleRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);