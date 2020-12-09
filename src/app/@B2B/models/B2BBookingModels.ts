export class B2BBooking {
  id: string;
  bookingDate: Date;
  totalCost: number;
//  items: Tickets[];
}


export class Tickets {
  productId: number;
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
