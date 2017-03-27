import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//SERVICES
import { AuthGuard } from './../shared/auth/auth.guard';

//COMPONENTS
import { AllocationComponent } from './allocation.component';
import { AllocationListComponent } from './allocation-list/allocation-list.component';
import { AllocationDetailsComponent } from './allocation-details/allocation-details.component';

const ROUTES: Routes = [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
        {
            path: 'allocations',
            component: AllocationListComponent,
            canLoad: [AuthGuard],
        },
        {
            path: ':action/:id',
            component: AllocationDetailsComponent,
            canLoad: [AuthGuard]
        }
    ]
}
];

export const allocationRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);