import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from 'app/shared/shared.module';

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
    imports: [bookingRouting, CommonModule, FormsModule, HttpModule, SharedModule],
    declarations: [BookingComponent, BookingListComponent, BookingDetailsComponent],
    providers: [BookingService, ProfessionalService]
})

export class BookingModule { }