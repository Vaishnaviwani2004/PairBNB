import { Injectable } from "@angular/core";
import { Booking } from "./booking.model";


@Injectable({
  providedIn: 'root'
})
export class BookingService {
    private _bookings: Booking[] = [
        new Booking('1', 'p1', 'u1', 'Place 1', 2),
        new Booking('2', 'p2', 'u1', 'Place 2', 4),
        new Booking('3', 'p3', 'u1', 'Place 3', 1)
    ];

    get bookings() {
        return [...this._bookings];
    }
}