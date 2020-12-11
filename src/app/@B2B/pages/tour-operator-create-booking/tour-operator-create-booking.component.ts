import { EventService } from './../../services/event-service.service';
import { B2BBookingService } from './../../services/b2-bbooking.service';
import { TicketResource, Tour, TourInfo, Event } from './../../models/B2BBookingModels';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-tour-operator-create-booking',
  templateUrl: './tour-operator-create-booking.component.html',
  styleUrls: ['./tour-operator-create-booking.component.scss'],
})
export class TourOperatorCreateBookingComponent implements OnInit {
  showhiderecurring: boolean;
  recurring: number;
  tourTimeSelected: string;
  tickets: TicketResource[] = [];
  tours: Tour[] = [];
  selectedDates: Date[] = [];
  tourDropdownDates: TourInfo[] = [];
  public selectedEvent: Event;
  // Search params

  constructor(private b2bService :B2BBookingService, private eventService:EventService ) {
    this.tourDropdownDates = b2bService.GetTourInfo();
    this.tickets = this.b2bService.GenerateTickets();
    ///this.tours = this.b2bService.GenerateTours()
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
    ticket.quantitySelected = Number(event.target.value);
  }

  searchBookings($event) {
    this.SetSelectedWeekDates(this.recurring);
    this.tours = this.b2bService.GenerateTours(this.selectedDates, this.selectedEvent.eventDesc)
  }

  onDateSelect(date) {
    console.log(date);
  }
  SetSelectedWeekDates(weeks: number): void {
    let dte: Date = new Date();
     for (let i = 1; i < weeks; i++) {
       dte = new Date(dte.setDate(dte.getDate() + 7));
        this.selectedDates.push(dte);
        }
}

  eventSelected($event) {
    this.selectedEvent = this.eventService.getEvent($event);
  }
  setRecurringFor($event) {
    this.recurring = Number.parseInt($event);
  }

  timeSelected($event) {
    this.tourTimeSelected = $event;
  }

}
