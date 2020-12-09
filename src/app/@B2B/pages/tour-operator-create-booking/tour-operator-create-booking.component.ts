import { TicketResource } from './../../models/B2BBookingModels';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-tour-operator-create-booking',
  templateUrl: './tour-operator-create-booking.component.html',
  styleUrls: ['./tour-operator-create-booking.component.scss'],
})
export class TourOperatorCreateBookingComponent implements OnInit {
  showhiderecurring: boolean;
  tickets: TicketResource[];
  constructor(
  ) {
    this.tickets = this.GenerateTickets();
  }


  GenerateTickets(): TicketResource[] {
   return [
     {
        description : 'ADULT',
        price : 15.00,
        itemCode : 'ADULT',
        quantityAdmitted : 1,
        quantitySelected : 0,
      },
       {
        description : 'Family',
        price : 40.00,
        itemCode : 'FAMILY',
        quantityAdmitted : 1,
        quantitySelected : 0,
      },
       {
        description : 'OAP',
        price : 10.00,
        itemCode : 'OAP',
        quantityAdmitted : 1,
        quantitySelected : 0,
      },
     {
        description : 'Student',
        price : 10.00,
        itemCode : 'STUDENT',
        quantityAdmitted : 1,
        quantitySelected : 0
      },
    ];
  }

  ngOnInit(): void {
  }

  removeTicket($event, item) {


    if (item.quantitySelected > 0) {
      item.quantitySelected--;
    }
  }

  addTicket($event, item) {
    if (item.quantitySelected < 10) {
      item.quantitySelected++;
    }
  }

}
