import { EventService } from './../../services/event-service.service';
import { B2BBookingService } from './../../services/b2-bbooking.service';
import { Tickets, Tour, TourInfo, Event, B2BBooking, Cart } from './../../models/B2BBookingModels';
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
  tickets: Tickets[] = [];
  tours: Tour[] = [];
  selectedDates: Date[] = [];
  selectedDate: Date;
  tourDropdownDates: TourInfo[] = [];
  activeBooking: B2BBooking;
  canProceed: boolean;
  Cart: Cart;
  public selectedEvent: Event;
  debtorBalance: number = 10000;
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

  reserveTours(): void {

    if (this.Cart.bookings) {
      this.Cart.bookings = [];
      this.Cart.total = 0;
      this.Cart.event = this.selectedEvent;
    }
    const selectedTickets = [this.selectedEvent.tickets.find(x => x.quantitySelected > 0)];

    for (let index = 0; index < this.tours.length; index++) {
      const booking = new B2BBooking();
      booking.items = [];
      const element = this.tours[index];

      booking.bookingDate = element.TourDate;
      for (let index = 0; index < selectedTickets.length; index++) {
        const element = selectedTickets[index];
        element.subtotal = element.price * element.quantitySelected;
        booking.items.push(element);
        booking.totalCost += element.subtotal
        this.Cart.bookings.push(booking);
        this.Cart.total += element.subtotal;
      }
    }



  }

  ngOnInit(): void {
    this.tourDropdownDates = this.b2bService.GetTourInfo();
    //add check againsts storage here
    this.Cart = new Cart();
    this.Cart.bookings = [];
    this.Cart.total = 0;
  }

  removeTicket($event, item) {
      item.quantitySelected--;
  }

  addTicket($event, item) {
      item.quantitySelected++;
  }

  removeFromTourList($event, item: Tour) {
    const index: number = this.tours.indexOf(item);
    if (index !== -1) {
        this.tours.splice(index, 1);
    }
    this.checkCanProceed();
  }
  onKey(event: any, ticket: Tickets) {
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

    this.activeBooking = this.b2bService.createB2BBooking();
    this.tours = this.b2bService.GenerateTours(this.selectedDates, this.selectedEvent);
    this.checkCanProceed();

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

  checkCanProceed() {
    const inValidTours = this.tours.find(x => x.IsAvailable === false);
    if(!inValidTours) {
      this.canProceed = true;
    }
  }

  newTourSelected($event, tour: Tour) {
    tour.IsAvailable = true;
    this.checkCanProceed();
  }

}
