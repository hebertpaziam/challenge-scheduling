import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-details/booking-details.component';

import { AuthGuard } from './../auth/auth.guard';

const ROUTES: Routes = [{
    path: '',
    canActivateChild: [AuthGuard],
    children: [
        {
            path: 'bookings',
            component: BookingListComponent,
            canLoad: [AuthGuard],
        },
        {
            path: ':action/:id',
            component: BookingDetailComponent,
            canLoad: [AuthGuard]
        }
    ]
}
];

export const bookingRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);