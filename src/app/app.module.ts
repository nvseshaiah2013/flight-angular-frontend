import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { FlightComponent } from './components/flight/flight.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { SelectedFlightComponent } from './components/selected-flight/selected-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    SidebarComponent,
    TicketComponent,
    TicketListComponent,
    FlightComponent,
    FlightListComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    PaymentComponent,
    PassengerComponent,
    PaymentSuccessComponent,
    FlightSearchComponent,
    SelectedFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
