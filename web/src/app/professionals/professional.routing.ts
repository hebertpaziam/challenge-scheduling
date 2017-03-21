import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessionalComponent } from './professional.component';
import { ProfessionalListComponent } from './professional-list/professional-list.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';

import { AuthGuard } from './../shared/auth/auth.guard';

const ROUTES: Routes = [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
        {
            path: 'professionals',
            component: ProfessionalListComponent,
            canLoad: [AuthGuard],
        },
        {
            path: ':action/:id',
            component: ProfessionalDetailsComponent,
            canLoad: [AuthGuard]
        }
    ]
}
];

export const professionalRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);