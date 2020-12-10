export class B2BBooking {
  id: number;
  bookingDate: Date;
  totalCost: number;
  items: Tickets[];
}


export class Tickets {
  description: string;
  price: number;
  itemCode: string;
  quantityAdmitted: number;
  quantitySelected: number;
  constructor()  {

   }
}

export class TicketResource {
  description: string;
  price: number;
  itemCode: string;
  quantityAdmitted: number;
  quantitySelected: number;
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
