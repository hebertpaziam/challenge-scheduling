import { AuthGuard } from './shared/auth/auth.guard';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';

import { BookingModule } from './booking/booking.module';
import { ProfessionalModule } from './professional/professional.module';
import { RoleModule } from './role/role.module';
import { CustomerModule } from './customer/customer.module';
import { ProjectModule } from './project/project.module';

const ROUTES: Routes = [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
        {
            path: 'bookings',
            loadChildren: './booking/booking.module#BookingModule',
            canLoad: [AuthGuard],
        },
        {
            path: 'professionals',
            loadChildren: './professional/professional.module#ProfessionalModule',
            canLoad: [AuthGuard],
        },
        {
            path: 'roles',
            loadChildren: './role/role.module#RoleModule',
            canLoad: [AuthGuard],
        },
        {
            path: 'customers',
            loadChildren: './customer/customer.module#CustomerModule',
            canLoad: [AuthGuard],
        },
        {
            path: 'projects',
            loadChildren: './project/project.module#ProjectModule',
            canLoad: [AuthGuard],
        },
    ]
},
{
    path: 'home',
    component: AppHomeComponent
}
];

export const appRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);