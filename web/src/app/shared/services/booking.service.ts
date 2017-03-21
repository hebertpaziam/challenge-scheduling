import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Booking } from '../models/booking.model'


@Injectable()
export class BookingService {

    private url: string = '/api/booking'

    constructor(private http: Http) { }

    createBooking(booking: Booking): Promise<Booking> {
        return this.http.post(`${this.url}/post`, JSON.stringify(booking)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getBookingById(booking: Booking): Promise<Booking> {
        return this.http.get(`${this.url}/${booking.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    getBookings(): Promise<Booking[]> {
        return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => )
            .catch((error: Error) => this.errorHandling(error))
    }

    updateBooking(booking: Booking): Promise<Booking> {
        return this.http.put(`${this.url}/${booking.id}`, JSON.stringify(booking)).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error))
    }

    deleteBooking(booking: Booking): Promise<boolean> {
        return this.http.delete(`${this.url}/${booking.id}`).toPromise()
            .then((res: Response) => this.extractData(res))
            .catch((error: Error) => this.errorHandling(error));
    }

    extractData(response: Response): any {
        return response.json().data || response.json()
    }
    errorHandling(error: any): any {
        console.log(error)
    }

}