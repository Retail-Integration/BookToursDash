
import { B2BBookingService } from '../../@B2B/services/b2-bbooking.service';
import { BookingsListingComponent } from './../../@B2B/booking/bookings-listing/bookings-listing.component';
import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
  NbAccordionModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ChartModule } from 'angular2-chartjs';
import { StatsCardBackComponent } from './profit-card/back-side/stats-card-back.component';
import { StatsAreaChartComponent } from './profit-card/back-side/stats-area-chart.component';
import { StatsBarAnimationChartComponent } from './profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from './profit-card/front-side/stats-card-front.component';
import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarComponent } from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from './traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficBackCardComponent } from './traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from './traffic-reveal-card/back-side/traffic-bar-chart.component';
import {
  ECommerceVisitorsAnalyticsComponent,
} from './visitors-analytics/visitors-analytics.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from './visitors-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from './visitors-analytics/visitors-statistics/visitors-statistics.component';
import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';
import { ECommerceUserActivityComponent } from './user-activity/user-activity.component';
import { ECommerceProgressSectionComponent } from './progress-section/progress-section.component';
import { SlideOutComponent } from './slide-out/slide-out.component';

import { CountryOrdersComponent } from './country-orders/country-orders.component';
import { CountryOrdersMapComponent } from './country-orders/map/country-orders-map.component';
import { CountryOrdersMapService } from './country-orders/map/country-orders-map.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CountryOrdersChartComponent } from './country-orders/chart/country-orders-chart.component';
import { EarningCardComponent } from './earning-card/earning-card.component';
import { EarningCardBackComponent } from './earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from './earning-card/back-side/earning-pie-chart.component';
import { EarningCardFrontComponent } from './earning-card/front-side/earning-card-front.component';
import { EarningLiveUpdateChartComponent } from './earning-card/front-side/earning-live-update-chart.component';
import { TourOperatorHomeDashComponent } from '../../@B2B/pages/tour-operator-home-dash/tour-operator-home-dash.component';
import { TourOperatorBookingListingsComponent } from '../../@B2B/pages/tour-operator-booking-listings/tour-operator-booking-listings.component';
import { TourOperatorCreateBookingComponent } from '../../@B2B/pages/tour-operator-create-booking/tour-operator-create-booking.component';
import { TourOperatorPayAsYouGoComponent } from '../../@B2B/pages/tour-operator-pay-as-you-go/tour-operator-pay-as-you-go.component';
import { StaffPortalComponent } from '../../@B2B/pages/staff-portal/staff-portal.component';
import { SelectedTimedTourDetailsComponent } from '../../@B2B/components/meridian/selected-timed-tour-details/selected-timed-tour-details.component';
import { BookingsCalanderComponent } from '../../@B2B/booking/bookings-calander/bookings-calander.component';

import { AccountDetailsComponent } from '../../@B2B/components/meridian/account-details/account-details.component';
import { BookingControlComponent } from '../../@B2B/booking/booking-control/booking-control.component';
import { EditBookingControlComponent } from '../../@B2B/booking/edit-booking-control/edit-booking-control.component';
import { CancelBookingControlComponent } from '../../@B2B/booking/cancel-booking-control/cancel-booking-control.component';
// tslint:disable-next-line: max-line-length
import { PPAccountBalanceComponent } from '../../@B2B/components/meridian/ppaccount-balance/ppaccount-balance.component';
import { RetailerHomeDashComponent } from '../../@B2B/pages/retailer-home-dash/retailer-home-dash.component';
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    NbAccordionModule,
  ],
  declarations: [
    ECommerceComponent,
    StatsCardFrontComponent,
    StatsAreaChartComponent,
    StatsBarAnimationChartComponent,
    ProfitCardComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    StatsCardBackComponent,
    TrafficRevealCardComponent,
    TrafficBarChartComponent,
    TrafficFrontCardComponent,
    TrafficBackCardComponent,
    TrafficBarComponent,
    TrafficCardsHeaderComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    ECommerceVisitorsAnalyticsComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
    ECommerceLegendChartComponent,
    ECommerceUserActivityComponent,
    ECommerceProgressSectionComponent,
    SlideOutComponent,
    EarningCardComponent,
    EarningCardFrontComponent,
    EarningCardBackComponent,
    EarningPieChartComponent,
    EarningLiveUpdateChartComponent,
    BookingsListingComponent,
    TourOperatorCreateBookingComponent,
    TourOperatorHomeDashComponent,
    TourOperatorBookingListingsComponent,
    TourOperatorPayAsYouGoComponent, StaffPortalComponent, SelectedTimedTourDetailsComponent,
    BookingsCalanderComponent, AccountDetailsComponent, BookingControlComponent,
    EditBookingControlComponent, CancelBookingControlComponent, PPAccountBalanceComponent, RetailerHomeDashComponent,
  ],
  providers: [
    CountryOrdersMapService,
    B2BBookingService,
  ],
})
export class ECommerceModule { }
