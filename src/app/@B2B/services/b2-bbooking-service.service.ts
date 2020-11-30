import { B2BBooking } from './../models/B2BBookingModels';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class B2BBookingServiceService {

  url = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getAllBookings(): Observable<any> {
    return this.http.get<B2BBooking[]>('C:\\Development\\BookTours\\Dashboard\\src\\app\\@B2B\\sampledata');
  }

}
