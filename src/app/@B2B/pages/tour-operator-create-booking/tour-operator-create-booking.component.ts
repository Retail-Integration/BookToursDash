import { B2BBookingService } from './../../services/b2-bbooking.service';
import { TicketResource, Tour } from './../../models/B2BBookingModels';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-tour-operator-create-booking',
  templateUrl: './tour-operator-create-booking.component.html',
  styleUrls: ['./tour-operator-create-booking.component.scss'],
})
export class TourOperatorCreateBookingComponent implements OnInit {
  showhiderecurring: boolean;
  tickets: TicketResource[];
  tours: Tour[];
  selectedDates: Date[];

  //Search params
  @ViewChild('#date') date;
  // @ViewChild('myname') input;
  // @ViewChild('myname') input;
  // @ViewChild('myname') input;
  // @ViewChild('myname') input;

  constructor(private b2bService :B2BBookingService) {
    this.tickets = this.b2bService.GenerateTickets();
  }

  // onSubmit(){
  //   this.formInvalid = this.form.invalid;
  //   if (this.formInvalid) {
  //     return;
  //   }
  //   console.log('First name: ' + this.formControls.firstName.value);
  //   this.selectedPlans = this.plans
  //     .map((plan, i) => ({
  //       planCode: plan.planCode,
  //       selected: this.formControls.plans[i].checkbox.value,
  //       divisionCode: this.formControls.plans[i].division.value
  //     }))
  //     .filter(x => x.selected);
  // }



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

  updateValue($event, item) {

  }
  checked = false;

  toggle(checked: boolean) {
    this.checked = checked;
  }

  onKey(event: any, ticket: TicketResource) {
    console.log(event.target.value);
    ticket.quantitySelected = Number.parseInt(event.target.value);
  }

  searchBookings($event) {
    console.log(this.date);
  }

  onDateSelect(date) {
    console.log(date);
  }

  SetSelectedWeekDates(): void {
    let dte: Date = new Date();
     for (let i = 1; i < 8; i++) {
        this.selectedDates[i-1]=new Date(dte.setDate(dte.getDate() + 1));
        }

}

}
