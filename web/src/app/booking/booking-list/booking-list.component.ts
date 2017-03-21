import { Component, OnInit } from '@angular/core';

import { Booking } from '../shared/booking.model';
import { Professional } from '../../professional/shared/professional.model';

import { BookingService } from '../shared/booking.service';
import { ProfessionalService } from '../../professional/shared/professional.service';

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
        this._professionalService.getProfessionalList().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
        this._bookingService.getBookings().then((bookingList: Booking[]) => this.bookings = bookingList).catch((error: Error) => { throw error });
    }

    getSponsorName(booking: Booking): string {
        return this.sponsors.find(s => s.professionalId === booking.sponsor).name
    }
}
