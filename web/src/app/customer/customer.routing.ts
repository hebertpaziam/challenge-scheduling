import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//SERVICES
import { AuthGuard } from './../shared/auth/auth.guard';

//COMPONENTS
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const ROUTES: Routes = [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
        {
            path: '',
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

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class CustomerRoutingModule {}