import { BookingError, TicketResource, Tickets, UpdateTokenResult, Tour, TourInfo, Event as EventModel } from './../models/B2BBookingModels';
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
  constructor(private http: HttpClient,
    private storage: StorageService) {

    }

  getAllBookings(): Observable<B2BBooking[]> {
    return of([
      {
        id: 123,
        bookingDate: new Date(),
        totalCost: 100,
        items:  [{
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
                  quantityAdmitted : 4,
                  quantitySelected : 0,
                }],
      },
      {
        id: 124,
        bookingDate: new Date(),
        totalCost: 100,
        items:  [{
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
                  quantityAdmitted : 4,
                  quantitySelected : 0,
                }],
      },
      {
        id: 125,
        bookingDate: new Date(),
        totalCost: 100,
        items:  [{
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
                  quantityAdmitted : 4,
                  quantitySelected : 0,
                }],
      },

    ]);
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
         quantityAdmitted : 4,
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
         quantitySelected : 0,
       },
     ];
  }

  GenerateSpecialTickets(): TicketResource[] {
  return [
    {
        description : 'ADULT SPECIAL RATE',
        price : 12.50,
        itemCode : 'ADULT',
        quantityAdmitted : 1,
        quantitySelected : 0,
      },
      {
        description : 'Family SPECIAL RATE',
        price : 30.00,
        itemCode : 'FAMILY',
        quantityAdmitted : 4,
        quantitySelected : 0,
      },
      {
        description : 'Children SPECIAL RATE',
        price : 5.00,
        itemCode : 'OAP',
        quantityAdmitted : 1,
        quantitySelected : 0,
      },
    ];
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
    this.CurrentBooking.bookingDate = new Date();
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
