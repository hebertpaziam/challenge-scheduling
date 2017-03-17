import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookingModule } from './booking/booking.module';

const ROUTES: Routes = [{
    path: '',
    canActivateChild: [Promise.resolve(true)],
    children: [
        {
            path: 'booking',
            loadChildren: './booking/booking.module#BookingModule',
            canLoad: [Promise.resolve(true)],
        }
    ]
}
];

export const appRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);