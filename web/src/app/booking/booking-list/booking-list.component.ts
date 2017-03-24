import { Component, OnInit } from '@angular/core';

//MODELS
import { Booking } from '../../shared/models/booking.model';
import { Professional } from '../../shared/models/professional.model';

//SERVICES
import { BookingService } from "../../shared/services/booking.service";
import { ProfessionalService } from "../../shared/services/professional.service";


@Component({
    moduleId: module.id,
    selector: 'ava-booking-list',
    templateUrl: './booking-list.component.html',
    styles: ['tbody > tr > td > span { cursor:pointer }', 'table{text-align:center}']
})

export class BookingListComponent implements OnInit {

    constructor(private _bookingService: BookingService, private _professionalService: ProfessionalService) { }

    private bookings: Booking[];
    private sponsors: Professional[];

    ngOnInit() {
        this._professionalService.getProfessionals().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
        this._bookingService.getBookings().then((bookingList: Booking[]) => this.bookings = bookingList).catch((error: Error) => { throw error });
    }

    getSponsorName(booking: Booking): string {
        return this.sponsors.find(s => s.id === booking.professional.id).name
    }
}
