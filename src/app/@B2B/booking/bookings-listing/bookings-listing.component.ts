import { StorageService } from './../../services/storage.service';
import { B2BBookingService } from './../../services/b2-bbooking.service';
import { B2BBooking, Tour } from './../../models/B2BBookingModels';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-bookings-listing',
  templateUrl: './bookings-listing.component.html',
  styleUrls: ['./bookings-listing.component.scss'],
})
export class BookingsListingComponent implements OnInit {

  loggedIn: string = '';
  bookings: B2BBooking[];
  constructor(private booking: B2BBookingService, private storage: StorageService) {
    this.loggedIn = storage.getSession('User');
    booking.getAllBookings()
    .subscribe(
      (result: B2BBooking[]) => this.bookings = result.sort(x => x.tour.TourDate.getDate()),
    );

   }

  ngOnInit(): void {
  }
}
