import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//SERVICES
import { AuthGuard } from './../shared/auth/auth.guard';

//COMPONENTS
import { BookingComponent } from './booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

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
            component: BookingDetailsComponent,
            canLoad: [AuthGuard]
        }
    ]
}
];

export const bookingRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);