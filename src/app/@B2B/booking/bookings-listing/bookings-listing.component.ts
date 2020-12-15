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
        EventTypeCode: "001",
        EventCode: "001",
        EventEventDesc: "General Admission",
        AvailableCapacity: 100,
        EventCapacity: 0,
        TourDateFormatted: "1/01/21",
        TourDate : new Date(2021, 1, 1),
        IsAvailable: true,
        AlternativeTimes : ["test"]
      }
    ]
   }

  ngOnInit(): void {
  //  this.populateTours();
  }

  // populateTours(): Tour{
  //   this.tours.EventTypeCode = "001",
  //   this.tours.EventCode= "001",
  //   this.tours.EventEventDesc= "General Admission",
  //   this.tours.AvailableCapacity= 100,
  //   this.tours.AvailableCapacity= 0,
  //   this.tours.TourDateFormatted= "1/01/21",
  //   this.tours.TourDate = new Date(2021, 1, 1),
  //   this.tours.IsAvailable= true,
  //   this.tours.AlternativeTimes = ["test"]


  //         return this.tours;
  //}

}
