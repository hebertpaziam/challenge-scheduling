import { IBooking } from './booking.interface';

export class Booking implements IBooking {
    id: number;
    name: string;
    contact: string;
    email: string;
    sponsor: number;
    deleted: boolean;
}