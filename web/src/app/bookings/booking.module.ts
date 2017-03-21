import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

//components
import { BookingComponent } from './booking.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

//services
import { BookingService } from "../shared/services/booking.service";
import { ProfessionalService } from "../shared/services/professional.service";

//routing
import { bookingRouting } from './booking.routing';

@NgModule({
    imports: [SharedModule, bookingRouting],
    declarations: [BookingComponent, BookingListComponent, BookingDetailsComponent],
    providers: [BookingService, ProfessionalService]
})

export class BookingModule { }