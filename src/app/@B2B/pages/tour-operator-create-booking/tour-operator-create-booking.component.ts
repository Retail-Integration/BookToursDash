import { StorageService } from './../../services/storage.service';
import { EventService } from './../../services/event-service.service';
import { B2BBookingService } from './../../services/b2-bbooking.service';
import { Tickets, Tour, TourInfo, Event, B2BBooking, Cart, TimeInfo } from './../../models/B2BBookingModels';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NbDateService, NbSelectComponent } from '@nebular/theme';

@Component({
  selector: 'ngx-tour-operator-create-booking',
  templateUrl: './tour-operator-create-booking.component.html',
  styleUrls: ['./tour-operator-create-booking.component.scss'],
})
export class TourOperatorCreateBookingComponent implements OnInit {
  showhiderecurring: boolean;
  recurring: number;
  tourTimeSelected: number;
  tickets: Tickets[] = [];
  tours: Tour[] = [];
  selectedDates: Date[] = [];
  selectedDate: Date;
  selectedTime: Date;
  tourDropdownDates: TourInfo[] = [];
  activeBooking: B2BBooking;
  canProceed: boolean;
  Cart: Cart;
  public selectedEvent: Event;
  debtorBalance: number = 1000;
  loggedIn: string = '';
  minDate: Date;
  maxDate: Date;
  lastOrderRef = 128;
  // Search params
  constructor(private b2bService: B2BBookingService,
    private eventService: EventService,
    private storage: StorageService,
    protected dateService: NbDateService<Date>)  {
      this.loggedIn = storage.getSession('User');
      this.minDate = this.dateService.addDay(this.dateService.today(), 1);
      this.maxDate = this.dateService.addMonth(this.dateService.today(), 3);
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

    if (this.Cart.Bookings) {
      this.Cart.Bookings = [];
      this.Cart.Total = 0;
      this.Cart.Event = this.selectedEvent;
    }
    const selectedTickets = this.selectedEvent.tickets.filter(x => x.quantitySelected > 0);

    for (let index = 0; index < this.tours.length; index++) {
      const booking = new B2BBooking();
      booking.id = Number(this.lastOrderRef++);
      booking.bookedBy = this.loggedIn;
      booking.Event = this.selectedEvent;
      booking.items = [];
      const tour = this.tours[index];
      booking.tour = tour;
      booking.bookingDate = tour.TourDate;
      for (let ticketIndex = 0; ticketIndex < selectedTickets.length; ticketIndex++) {
        const element = selectedTickets[ticketIndex];
        element.subtotal = element.price * element.quantitySelected;
        booking.items.push(element);
        booking.totalCost += element.subtotal;
        this.Cart.Total += element.subtotal;
      }
      this.Cart.Bookings.push(booking);
    }

  }

  updateList() {
      this.b2bService.saveBookings(this.Cart.Bookings);
  }


  ngOnInit(): void {
    this.tourDropdownDates = this.b2bService.GetTourInfo();
    // add check againsts storage here
      this.Cart = new Cart();
      this.Cart.Bookings = [];
      this.Cart.Total = 0;

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
    this.selectedDate = new Date(this.selectedDate.setHours(this.tourTimeSelected));
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
    for (let index = 0; index < this.selectedEvent.tickets.length; index++) {
      const element = this.selectedEvent.tickets[index];
      element.quantitySelected === 0;
      element.quantitySelected === 0;
    }
    this.selectedEvent = undefined;
    this.selectedDate = undefined;
    this.recurring = undefined;
    this.tours = [];
    this.selectedDates = [];
    this.Cart.Bookings = [];
    this.Cart.Total = 0;
    this.checked = false;


  }
  setRecurringFor($event) {
    this.recurring = Number($event);
  }

  timeSelected($event) {
    this.tourTimeSelected = Number($event);
  }

  checkCanProceed() {
    const inValidTours = this.tours.find(x => x.IsAvailable === false);
    if (!inValidTours) {
      this.canProceed = true;
    }
  }

  newTourSelected($event, tour: Tour) {
    tour.TourDate.setHours(Number($event));
    tour.IsAvailable = true;
    this.checkCanProceed();
  }

}
