import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
  standalone: false
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[] = [];

  constructor(private bookingsService: BookingService) {}

  ngOnInit() {
    this.loadedBookings = this.bookingsService.bookings;
  }

  cancelBooking(bookingId: string, slidingItem: IonItemSliding) {
    console.log('Cancel booking with ID:', bookingId);
    slidingItem.close();
  }

}
