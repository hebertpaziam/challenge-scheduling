import { NgModule } from '@angular/core';

import { bookingRouting } from './booking.routing';
import { BookingComponent } from './booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailComponent } from './booking-details/booking-details.component';
import { BookingService } from './shared/booking.service';

import { PercentualFilter } from '../shared/filters/percentual';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule, bookingRouting],
    declarations: [BookingComponent, BookingDetailComponent, BookingListComponent, PercentualFilter],
    providers: [BookingService]
})

export class BookingModule { }