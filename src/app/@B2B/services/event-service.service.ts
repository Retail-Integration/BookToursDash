import { Event, Tickets, Tour } from './../models/B2BBookingModels';
import { B2BBookingService } from './b2-bbooking.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  events: Event[];
  constructor() {
    this.events = this.sampleEvents();
   }

   getEvent(eventCode: string): Event {
    for (let index = 0; index < this.events.length; index++) {
      const element = this.events[index];
      if (element.eventCode === eventCode) {
        return element as Event;
      }
    }
   }

   sampleEvents(): Event[] {
     return [
            {
              eventCode: '001',
              eventDesc: 'Morning Tour',
              tickets: this.GenerateTickets(),
              times: this.morningTimes(),
              selectedTime: '',
            },
            {
              eventCode: '002',
              eventDesc: 'Special Tour',
              tickets: this.GenerateSpecialTickets(),
              times: this.afternoonTimes(),
              selectedTime: ''
            },
     ];
  }


  sampleBookedEvents(): Event[] {
    return [
           {
             eventCode: '001',
             eventDesc: 'Morning Tour',
             tickets: this.GenerateTickets(),
             times: this.morningTimes(),
             selectedTime: '10am',
           },
           {
             eventCode: '002',
             eventDesc: 'Special Tour',
             tickets: this.GenerateSpecialTickets(),
             times: this.afternoonTimes(),
             selectedTime: '4pm'
           },
    ];
  }

  sampleTours(): Tour[] {

    return [
      {
        EventTypeCode: '001',
        EventCode: '001',
        EventEventDesc: 'Morning Tour',
        AvailableCapacity: 50,
        EventCapacity: 100,
        TourDateFormatted: '01/04/21',
        TourDate : new Date(2021, 4, 1, 10, 0 ,0),
        IsAvailable: false,
        AlternativeTimes : ['15.00', '18.00'],
      },
      {
        EventTypeCode: '001',
        EventCode: '001',
        EventEventDesc: 'Morning Tour',
        AvailableCapacity: 50,
        EventCapacity: 100,
        TourDateFormatted: '08/04/21',
        TourDate : new Date(2021, 4, 8, 10, 0 ,0),
        IsAvailable: false,
        AlternativeTimes : ['15.00', '18.00'],
      },
      {
        EventTypeCode: '001',
        EventCode: '001',
        EventEventDesc: 'Morning Tour',
        AvailableCapacity: 50,
        EventCapacity: 100,
        TourDateFormatted: '15/04/21',
        TourDate : new Date(2021, 4, 15, 10, 0 ,0),
        IsAvailable: false,
        AlternativeTimes : ['15.00', '18.00'],
      },

      {
        EventTypeCode: '002',
        EventCode: '002',
        EventEventDesc: 'Special Tour',
        AvailableCapacity: 0,
        EventCapacity: 100,
        TourDateFormatted: '02/01/21',
        TourDate : new Date(2021, 3, 16, 16, 0 ,0),
        IsAvailable: true,
        AlternativeTimes : ['13.00', '16.00'],
      },
      {
        EventTypeCode: '002',
        EventCode: '002',
        EventEventDesc: 'Special Tour',
        AvailableCapacity: 0,
        EventCapacity: 100,
        TourDateFormatted: '02/01/21',
        TourDate : new Date(2021, 3, 23, 16, 0 ,0),
        IsAvailable: true,
        AlternativeTimes : ['13.00', '16.00'],
      },
      {
        EventTypeCode: '002',
        EventCode: '002',
        EventEventDesc: 'Special Tour',
        AvailableCapacity: 0,
        EventCapacity: 100,
        TourDateFormatted: '02/01/21',
        TourDate :new Date(2021, 3, 30, 16, 0 ,0),
        IsAvailable: true,
        AlternativeTimes : ['13.00', '16.00'],
      },
    ];
  }

  morningTimes(): string[] {
    return ['9am', '10am', '11am', '12pm'];
  }
  afternoonTimes(): string[] {
    return ['1pm', '2pm', '3pm', '4pm'];
  }

  GenerateTickets(): Tickets[] {
    return [
      {
         description : 'ADULT',
         price : 15.00,
         itemCode : 'ADULT',
         quantityAdmitted : 1,
         quantitySelected : 0,
         subtotal: 0,
       },
        {
         description : 'Family',
         price : 40.00,
         itemCode : 'FAMILY',
         quantityAdmitted : 4,
         quantitySelected : 0,
         subtotal: 0,
       },
        {
         description : 'OAP',
         price : 10.00,
         itemCode : 'OAP',
         quantityAdmitted : 1,
         quantitySelected : 0,
         subtotal: 0,
       },
      {
         description : 'Student',
         price : 10.00,
         itemCode : 'STUDENT',
         quantityAdmitted : 1,
         quantitySelected : 0,
         subtotal: 0,
       },
     ];
  }

  GenerateSpecialTickets(): Tickets[] {
  return [
    {
        description : 'ADULT SPECIAL RATE',
        price : 12.50,
        itemCode : 'ADULT',
        quantityAdmitted : 1,
        quantitySelected : 0,
        subtotal: 0,
      },
      {
        description : 'Family SPECIAL RATE',
        price : 30.00,
        itemCode : 'FAMILY',
        quantityAdmitted : 4,
        quantitySelected : 0,
        subtotal: 0,
      },
      {
        description : 'Children SPECIAL RATE',
        price : 5.00,
        itemCode : 'OAP',
        quantityAdmitted : 1,
        quantitySelected : 0,
        subtotal: 0,
      },
    ];
  }

}
