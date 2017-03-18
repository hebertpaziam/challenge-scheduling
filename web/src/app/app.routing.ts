import { AuthGuard } from './auth/auth.guard';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookingModule } from './booking/booking.module';

const ROUTES: Routes = [{
    path: '',
    component:AppComponent,
    canActivateChild: [AuthGuard],
    children: [
        {
            path: 'bookings',
            loadChildren: './booking/booking.module#BookingModule',
            canLoad: [AuthGuard],
        }
    ]
}
];

export const appRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);