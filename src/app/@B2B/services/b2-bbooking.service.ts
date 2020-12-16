import { EventService } from './event-service.service';
import { BookingError, Tickets, UpdateTokenResult, Tour, TourInfo, Event as EventModel } from './../models/B2BBookingModels';
import { B2BBooking } from '../models/B2BBookingModels';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { iterator } from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root',
})
export class B2BBookingService {

  url = 'http://localhost:4200';

 // date.setDate(date.getDate() + 1);
  CurrentBooking = new B2BBooking ();
  events: EventModel[] = [];
  tours: Tour[] = [];
  constructor(private http: HttpClient,
    private storage: StorageService,
    private eventService: EventService) {
    this.events =  this.eventService.sampleBookedEvents();
    this.tours = this.eventService.sampleTours();
    }




  getAllBookings(): Observable<B2BBooking[]> {

    const date = new Date();
    return of([
      {
        id: 123,
        bookedBy: 'p.kenny@retail-int.com',
        bookingDate: new Date(2020, 12, 14, 10, 29 , 15),
        Event: this.events[0],
        totalCost: 100,
        tour : this.tours[0],
        items:  [{
                  description : 'ADULT',
                  price : 15.00,
                  itemCode : 'ADULT',
                  quantityAdmitted : 1,
                  quantitySelected : 0,
                  subtotal: 0,
                },
                {
                  description : 'Family',
                  price : 40.00,
                  itemCode : 'FAMILY',
                  quantityAdmitted : 4,
                  quantitySelected : 0,
                  subtotal: 0,
                }],
      },
      {
        id: 124,
        bookedBy: 'p.kenny@retail-int.com',
        bookingDate: new Date(2020, 12, 9, 15, 29 , 15),
        totalCost: 950.00,
        Event: this.events[0],
        tour: this.tours[1],
        items:  [{
                  description : 'OAP',
                  price : 15.00,
                  itemCode : 'OAP',
                  quantityAdmitted : 1,
                  quantitySelected : 10,
                  subtotal: 150.00,
                },
                {
                  description : 'Family',
                  price : 40.00,
                  itemCode : 'FAMILY',
                  quantityAdmitted : 4,
                  quantitySelected : 20,
                  subtotal: 800.00,
                }],
      },
      {
        id: 125,
        bookedBy: 'e.bradshaw@retail-int.com',
        bookingDate: new Date(2020, 12, 9, 15, 29 , 15),
        totalCost: 555.00,
        Event: this.events[0],
        tour: this.tours[2],
        items:  [{
                  description : 'ADULT',
                  price : 15.00,
                  itemCode : 'ADULT',
                  quantityAdmitted : 1,
                  quantitySelected : 10,
                  subtotal: 150.00,
                },
                {
                  description : 'Family',
                  price : 40.00,
                  itemCode : 'FAMILY',
                  quantityAdmitted : 4,
                  quantitySelected : 10,
                  subtotal: 400.00,
                }],
      },
      {
        id: 126,
        bookedBy: 'e.bradshaw@retail-int.com',
        bookingDate:  new Date(2020, 12, 9, 15, 29 , 15),
        totalCost: 350.00,
        Event: this.events[1],
        tour : this.tours[3],
        items:  [{
                  description : 'ADULT',
                  price : 15.00,
                  itemCode : 'ADULT',
                  quantityAdmitted : 1,
                  quantitySelected : 10,
                  subtotal: 150.00,
                },
                {
                  description : 'Family',
                  price : 40.00,
                  itemCode : 'FAMILY',
                  quantityAdmitted : 4,
                  quantitySelected : 5,
                  subtotal: 200.00,
                }],
      },
      {
        id: 127,
        bookedBy: 'e.bradshaw@retail-int.com',
        bookingDate: new Date(2020, 12, 9, 15, 29 , 15),
        totalCost: 550.00,
        Event: this.events[1],
        tour: this.tours[4],
        items:   [{
                  description : 'ADULT',
                  price : 15.00,
                  itemCode : 'ADULT',
                  quantityAdmitted : 1,
                  quantitySelected : 10,
                  subtotal: 150.00,
                },
                {
                  description : 'Family',
                  price : 40.00,
                  itemCode : 'FAMILY',
                  quantityAdmitted : 4,
                  quantitySelected : 10,
                  subtotal: 400.00,
                }],
      },
      {
        id: 128,
        bookedBy: 'e.bradshaw@retail-int.com',
        bookingDate: new Date(2020, 12, 9, 15, 29 , 15),
        totalCost: 490.00,
        Event: this.events[1],
        tour: this.tours[5],
        items:  [{
                  description : 'ADULT',
                  price : 15.00,
                  itemCode : 'ADULT',
                  quantityAdmitted : 1,
                  quantitySelected : 6,
                  subtotal: 90.00,
                },
                {
                  description : 'Family',
                  price : 40.00,
                  itemCode : 'FAMILY',
                  quantityAdmitted : 4,
                  quantitySelected : 10,
                  subtotal: 400.00,
                }],
      },
    ]);
  }


  GenerateTours(dates: Date[], event: EventModel): Tour[] {
    const tours: Tour[] = [];
    for (let index = 0; index < dates.length; index++) {
      const element = dates[index];
      const tour = new Tour();
      tour.EventTypeCode = event.eventCode;
      tour.EventCode = event.eventCode;
      tour.EventEventDesc = event.eventDesc;
      tour.EventCapacity = 20;
      tour.AvailableCapacity = 20;
      tour.TourDate = new Date(element);
      if (index / 2) {
        tour.IsAvailable = true;
      } else {
        tour.AlternativeTimes = event.times;
        tour.IsAvailable = false;
      }
      tours.push(tour);
    }

    return tours;
  }

  GetTourInfo(): TourInfo[] {
    return [
      {
        EventCode : '001',
        EventDesc : 'Morning Tour',
      },
      {
        EventCode : '002',
        EventDesc : 'Special Tour',
      },
    ];
  }


  createB2BBooking(): B2BBooking  {
    this.CurrentBooking.id = Math.floor((Math.random() * 100) + 1);
    this.CurrentBooking.totalCost = 0;
    this.CurrentBooking.bookingDate = new Date(new Date().getDate());
    this.CurrentBooking.items = [];
    this.storage.set('CurrentBooking', JSON.stringify(this.CurrentBooking));
    return this.CurrentBooking;
  }


 // reserveTours(billingInfo: Tickets[]): Observable<boolean | BookingError> {
    reserveTours(tickets: Tickets[]): boolean {
    this.CurrentBooking.items = tickets;
    this.storage.set('CurrentBooking', JSON.stringify(this.CurrentBooking));
    return true;
  }

    saveBooking(booking: B2BBooking): void {
      this.storage.set('CurrentBooking', JSON.stringify(booking));
    }

  // postPayment(payment: PaymentResource): Observable<boolean | BookingError> {
  //   const api = this.api + BookingApiEndpoints.Payment;
  //   const headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   return this.http.post<boolean>(api, payment, {headers})
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  private handleError(error: HttpErrorResponse): Observable<BookingError> {
    const dataError = new BookingError();
    dataError.errorNumber = error.status;
    dataError.message = error.message;
    dataError.userMessage = 'An Error Occured';
    return throwError(dataError);
  }
}
