

export class B2BBooking {
  id: number;
  bookedBy: string = '';
  bookingDate: Date;
  totalCost: number = 0;
  tour: Tour;
  Event: Event;
  items: Tickets[];
}

export class Event {
  eventCode: string;
  eventDesc: string;
  tickets: Tickets[];
  times: string[];
  selectedTime: string = '';
}


export class Tickets {
  description: string;
  price: number;
  itemCode: string;
  quantityAdmitted: number;
  quantitySelected: number;
  subtotal: number;
  constructor()  {

   }
}

export class Tour {
  EventTypeCode: string;
  EventCode: string;
  EventEventDesc: string;
  EventCapacity: number;
  AvailableCapacity: number;
  TourDateFormatted: string;
  TourDate: Date;
  IsAvailable: boolean;
  AlternativeTimes: string[];
}

export class BookingError {
  errorNumber: number;
  message: string;
  userMessage: string;
}

export interface UpdateTokenResult {
  role: string;
  accessToken: string;
  refreshToken: string;
}

export class TourInfo {
  EventCode: string;
  EventDesc: string;
}

export class Cart {
  Event: Event;
  Bookings: B2BBooking[];
  Total: number;

  constructor() {
    this.Bookings = [];
    this.Total = 0;
  }
}

