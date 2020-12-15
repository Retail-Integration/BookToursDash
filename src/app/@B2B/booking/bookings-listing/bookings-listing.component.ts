import { B2BBooking, Tour } from './../../models/B2BBookingModels';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ngx-bookings-listing',
  templateUrl: './bookings-listing.component.html',
  styleUrls: ['./bookings-listing.component.scss'],
})
export class BookingsListingComponent implements OnInit {
  tours =  Array<Tour>();


  constructor() {

    this.tours = [
      {
        EventTypeCode: '001',
        EventCode: '001',
        EventEventDesc: 'General Admission',
        AvailableCapacity: 0,
        EventCapacity: 100,
        TourDateFormatted: '01/01/21',
        TourDate : new Date(2021, 1, 1),
        IsAvailable: false,
        AlternativeTimes : ['15.00', '18.00'],
      },
      {
        EventTypeCode: '002',
        EventCode: '002',
        EventEventDesc: 'Timed Tour',
        AvailableCapacity: 0,
        EventCapacity: 100,
        TourDateFormatted: '02/01/21',
        TourDate : new Date(2021, 1, 2),
        IsAvailable: true,
        AlternativeTimes : ['13.00', '16.00'],
      },      {
        EventTypeCode: '003',
        EventCode: '003',
        EventEventDesc: 'Timed Tour',
        AvailableCapacity: 80,
        EventCapacity: 100,
        TourDateFormatted: '03/01/21',
        TourDate : new Date(2021, 1, 2),
        IsAvailable: true,
        AlternativeTimes : ['14.00', '17.00'],
      },      {
        EventTypeCode: '004',
        EventCode: '004',
        EventEventDesc: 'General Admission',
        AvailableCapacity: 90,
        EventCapacity: 100,
        TourDateFormatted: '04/01/21',
        TourDate : new Date(2021, 1, 2),
        IsAvailable: true,
        AlternativeTimes : ['11.00', '16.00'],
      },      {
        EventTypeCode: '005',
        EventCode: '005',
        EventEventDesc: 'VIP Package',
        AvailableCapacity: 5,
        EventCapacity: 10,
        TourDateFormatted: '04/01/21',
        TourDate : new Date(2021, 1, 2),
        IsAvailable: true,
        AlternativeTimes : ['13.00', '16.00'],
      },
    ];
   }

  ngOnInit(): void {
  }
}
