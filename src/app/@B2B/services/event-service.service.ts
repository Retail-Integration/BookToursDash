import { Event } from './../models/B2BBookingModels';
import { B2BBookingService } from './b2-bbooking.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  events: Event[];
  constructor(private booking: B2BBookingService) {
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
              tickets: this.booking.GenerateTickets(),
              times: this.morningTimes(),
            },
            {
              eventCode: '002',
              eventDesc: 'Special Tour',
              tickets: this.booking.GenerateSpecialTickets(),
              times: this.afternoonTimes(),
            },
     ];
  }

  morningTimes(): string[] {
    return ['9am', '10am', '11am', '12pm'];
  }
  afternoonTimes(): string[] {
    return ['1pm', '2pm', '3pm', '4pm'];
  }

}
