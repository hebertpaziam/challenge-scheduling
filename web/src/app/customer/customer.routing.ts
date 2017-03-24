import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

import { AuthGuard } from './../shared/auth/auth.guard';

const ROUTES: Routes = [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
        {
            path: 'customers',
            component: CustomerListComponent,
            canLoad: [AuthGuard],
        },
        {
            path: ':action/:id',
            component: CustomerDetailsComponent,
            canLoad: [AuthGuard]
        }
    ]
}
];

export const customerRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);