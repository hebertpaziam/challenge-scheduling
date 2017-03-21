import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Booking } from '../shared/booking.model';
import { Professional } from '../../professional/shared/professional.model';

import { BookingService } from '../shared/booking.service';
import { ProfessionalService } from '../../professional/shared/professional.service';

@Component({
    moduleId: module.id,
    templateUrl: './booking-details.component.html'
})
export class BookingDetailsComponent implements OnInit {

    public action: string;

    private booking: Booking = new Booking();
    private sponsors: Professional[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _bookingService: BookingService,
        private _professionalService: ProfessionalService,
        private _router: Router,
        private _location: Location
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params: Params) => {
            this.booking.id = +params['id'];
            this.action = params['action'];
        });

        this._bookingService.getBookingById(this.booking).then((booking: Booking) => { this.booking = booking }).catch((error: Error) => { throw error });
        this._professionalService.getProfessionalList().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
    }
    onCreate() {
        this.action = "new"
        this.booking = Object.assign({}, new Booking());
    }
    onEdit() {
        this.action = "edit"
    }

    save() {
        if (this.action === "edit") this._bookingService.updateBooking(this.booking).then(() => { this._router.navigate(['/bookings']) })
        else if (this.action === "new") this._bookingService.createBooking(this.booking).then(() => { this._router.navigate(['/bookings']) })
        else console.log("Action Invalid!!");
    }

    delete() {
        this._bookingService.deleteBooking(this.booking).then(() => { this._router.navigate(['/bookings']) })
    }

    goBack() {
        this._location.back();
    }

}