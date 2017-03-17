import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-details/booking-details.component';

const ROUTES: Routes = [{
    path: '',
    component: BookingComponent,
    canActivateChild: [Promise.resolve(true)],
    children: [
        {
            path: 'list',
            component: BookingListComponent,
            canLoad: [Promise.resolve(true)],
        },
        {
            path: ':action/:id',
            component: BookingDetailComponent,
            canLoad: [Promise.resolve(true)]
        }
    ]
}
];

export const bookingRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);