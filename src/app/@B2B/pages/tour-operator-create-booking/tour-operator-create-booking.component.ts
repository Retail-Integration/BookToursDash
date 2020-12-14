import { EventService } from './../../services/event-service.service';
import { B2BBookingService } from './../../services/b2-bbooking.service';
import { TicketResource, Tour, TourInfo, Event } from './../../models/B2BBookingModels';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NbSelectComponent } from '@nebular/theme';

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
  selectedDate: Date;
  tourDropdownDates: TourInfo[] = [];
  public selectedEvent: Event;
  // Search params
  constructor(private b2bService: B2BBookingService, private eventService: EventService)  {
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
    this.tourDropdownDates = this.b2bService.GetTourInfo();
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

  removeFromTourList($event, item: Tour) {
    const index: number = this.tours.indexOf(item);
    if (index !== -1) {
        this.tours.splice(index, 1);
    }
  }
  onKey(event: any, ticket: TicketResource) {
    ticket.quantitySelected = Number(event.target.value);
  }


  checked = false;
  toggle(checked: boolean) {
    this.checked = checked;
  }


  searchBookings($event) {
  const anyTickets = this.tickets.find(x => x.quantitySelected > 0);
    if (!this.recurring) {
      this.recurring = 0;
    }
    this.SetSelectedWeekDates(this.recurring);
    this.tours = this.b2bService.GenerateTours(this.selectedDates, this.selectedEvent);
  }

  onDateSelect($event) {
    this.selectedDate = new Date($event);
  }
  SetSelectedWeekDates(weeks: number): void {
    this.selectedDates.push(this.selectedDate);
    let start: Date = new Date(this.selectedDate);
     for (let i = 1; i <= weeks; i++) {
       let dte: Date = new Date(start);
       dte = new Date(dte.setDate(dte.getDate() + 7));
        this.selectedDates.push(new Date(dte));
        start = new Date(dte);
        }
}

  eventSelected($event) {
    if (this.selectedEvent) {
      this.tickets = [];
      this.tours = [];
      this.selectedDates = [];
    }
    this.selectedEvent = this.eventService.getEvent($event);
  }

  reset() {
    this.selectedEvent = undefined;
    this.selectedDate = undefined;
    this.recurring = undefined;
    this.tours = [];
    this.selectedDates = [];
  }
  setRecurringFor($event) {
    this.recurring = Number($event);
  }

  timeSelected($event) {
    this.tourTimeSelected = $event;
  }

  newTourSelected($event, tour: Tour) {
    tour.IsAvailable = true;
  }

}
