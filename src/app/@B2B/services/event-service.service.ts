import { Event, Tickets, TimeInfo, Tour } from './../models/B2BBookingModels';
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
              selectedTime: '',
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
             selectedTime: '4pm',
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
        TourDate : new Date(2021, 4, 1, 10, 0 , 0),
        IsAvailable: false,
        AlternativeTimes : [{DisplayTime:'11.00', Value: 11}, {DisplayTime:'12.00', Value: 12}],
      },
      {
        EventTypeCode: '001',
        EventCode: '001',
        EventEventDesc: 'Morning Tour',
        AvailableCapacity: 50,
        EventCapacity: 100,
        TourDateFormatted: '08/04/21',
        TourDate : new Date(2021, 4, 8, 10, 0 , 0),
        IsAvailable: false,
        AlternativeTimes : [{DisplayTime:'11.00', Value: 11}, {DisplayTime:'12.00', Value: 12}],
      },
      {
        EventTypeCode: '001',
        EventCode: '001',
        EventEventDesc: 'Morning Tour',
        AvailableCapacity: 50,
        EventCapacity: 100,
        TourDateFormatted: '15/04/21',
        TourDate : new Date(2021, 4, 15, 10, 0 , 0),
        IsAvailable: false,
        AlternativeTimes : [{DisplayTime:'11.00', Value: 11}, {DisplayTime:'12.00', Value: 12}],
      },

      {
        EventTypeCode: '002',
        EventCode: '002',
        EventEventDesc: 'Special Tour',
        AvailableCapacity: 0,
        EventCapacity: 100,
        TourDateFormatted: '02/01/21',
        TourDate : new Date(2021, 3, 16, 16, 0 , 0),
        IsAvailable: true,
        AlternativeTimes : [{DisplayTime:'11.00', Value: 11}, {DisplayTime:'12.00', Value: 12}],
      },
      {
        EventTypeCode: '002',
        EventCode: '002',
        EventEventDesc: 'Special Tour',
        AvailableCapacity: 0,
        EventCapacity: 100,
        TourDateFormatted: '02/01/21',
        TourDate : new Date(2021, 3, 23, 16, 0 , 0),
        IsAvailable: true,
        AlternativeTimes : [{DisplayTime:'13.00', Value: 13}, {DisplayTime:'16.00', Value: 13}],
      },
      {
        EventTypeCode: '002',
        EventCode: '002',
        EventEventDesc: 'Special Tour',
        AvailableCapacity: 0,
        EventCapacity: 100,
        TourDateFormatted: '02/01/21',
        TourDate : new Date(2021, 3, 30, 16, 0 , 0),
        IsAvailable: true,
        AlternativeTimes : [{DisplayTime:'11.00', Value: 11}, {DisplayTime:'12.00', Value: 12}],
      },
    ];
  }

  morningTimes(): TimeInfo[] {
    return [
      {
        DisplayTime: '9am',
        Value: 9
      },
      {
        DisplayTime: '10am',
        Value: 10
      },
      {
        DisplayTime: '11am',
        Value: 11
      },
      {
        DisplayTime: '12pm',
        Value: 12
      }];
  }
  afternoonTimes(): TimeInfo[] {
    //return ['1pm', '2pm', '3pm', '4pm'];
    return [
      {
        DisplayTime: '1pm',
        Value: 13
      },
      {
        DisplayTime: '2pm',
        Value: 14
      },
      {
        DisplayTime: '3pm',
        Value: 15
      },
      {
        DisplayTime: '4pm',
        Value: 16
      }];
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
