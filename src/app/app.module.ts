/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TourOperatorHomeDashComponent } from './@B2B/pages/tour-operator-home-dash/tour-operator-home-dash.component';
import { TourOperatorBookingListingsComponent } from './@B2B/pages/tour-operator-booking-listings/tour-operator-booking-listings.component';
import { TourOperatorCreateBookingComponent } from './@B2B/pages/tour-operator-create-booking/tour-operator-create-booking.component';
import { TourOperatorPayAsYouGoComponent } from './@B2B/pages/tour-operator-pay-as-you-go/tour-operator-pay-as-you-go.component';
import { StaffPortalComponent } from './@B2B/pages/staff-portal/staff-portal.component';
import { SelectedTimedTourDetailsComponent } from './@B2B/components/meridian/selected-timed-tour-details/selected-timed-tour-details.component';
import { BookingsCalanderComponent } from './@B2B/booking/bookings-calander/bookings-calander.component';

import { AccountDetailsComponent } from './@B2B/components/meridian/account-details/account-details.component';
import { BookingControlComponent } from './@B2B/booking/booking-control/booking-control.component';
import { EditBookingControlComponent } from './@B2B/booking/edit-booking-control/edit-booking-control.component';
import { CancelBookingControlComponent } from './@B2B/booking/cancel-booking-control/cancel-booking-control.component';
import { PPAccountBalanceComponent } from './@B2B/components/meridian/ppaccount-balance/ppaccount-balance.component';
import { RetailerHomeDashComponent } from './@B2B/pages/retailer-home-dash/retailer-home-dash.component';

@NgModule({
  declarations: [AppComponent, TourOperatorHomeDashComponent,
    TourOperatorBookingListingsComponent, TourOperatorCreateBookingComponent,
    TourOperatorPayAsYouGoComponent, StaffPortalComponent, SelectedTimedTourDetailsComponent,
    BookingsCalanderComponent, AccountDetailsComponent, BookingControlComponent,
    EditBookingControlComponent, CancelBookingControlComponent, PPAccountBalanceComponent, RetailerHomeDashComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
