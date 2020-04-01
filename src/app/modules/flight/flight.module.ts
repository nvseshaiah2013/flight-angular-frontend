import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightRoutingModule } from './flight-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';

import { SearchFlightComponent } from './search-flight/search-flight.component';
import { FlightComponent } from './flight/flight.component';
import { SelectedFlightComponent } from './selected-flight/selected-flight.component';
import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightListComponent } from './flight-list/flight-list.component';


@NgModule({
  declarations: [
    SearchFlightComponent, 
    FlightComponent,
    PassengerDetailComponent,
    SelectedFlightComponent,
    PaymentComponent, 
    PaymentSuccessComponent, 
    ViewTicketComponent, 
    FlightListComponent],
  imports: [
    CommonModule,
    FlightRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  entryComponents:[SelectedFlightComponent,PaymentSuccessComponent],
  providers:[]
})
export class FlightModule { }
