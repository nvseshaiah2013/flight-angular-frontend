import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightRoutingModule } from './flight-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchFlightComponent } from './search-flight/search-flight.component';
import { FlightComponent } from './flight/flight.component';
import { SelectedFlightComponent } from './selected-flight/selected-flight.component';
import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightListComponent } from './flight-list/flight-list.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { UpdatePassengerComponent } from './update-passenger/update-passenger.component';


@NgModule({
  declarations: [
    SearchFlightComponent, 
    FlightComponent,
    PassengerDetailComponent,
    SelectedFlightComponent,
    PaymentComponent, 
    PaymentSuccessComponent, 
    ViewTicketComponent, 
    FlightListComponent, PassengerListComponent, UpdatePassengerComponent],
  imports: [
    CommonModule,
    FlightRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  entryComponents:[SelectedFlightComponent,PaymentSuccessComponent,UpdatePassengerComponent],
  providers: []
})
export class FlightModule { }
