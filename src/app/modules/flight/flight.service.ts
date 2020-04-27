import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flight } from '../../models/flight.model';
import { Router } from '@angular/router';
import { BookingGaurdService } from './services/booking-gaurd.service';
import { BookingRequest } from 'src/app/models/booking-request.model';
import { BehaviorSubject } from 'rxjs';
import { Ticket } from 'src/app/models/ticket.model';
import { Passenger } from 'src/app/models/passenger.model';


@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseUrl = 'http://localhost:8080/flights';
  constructor(private http: HttpClient, private router: Router) { }
  private selectedFlight: Flight = null;
  private bookingRequest: BookingRequest = undefined;
  private ticket:Ticket;

  getFlights(source: string, destination: string, date) {
    
    let selectedDate = new Date(date.year, date.month - 1, date.day,12);
    selectedDate.setFullYear(date.year);
    let finalDate = selectedDate.toISOString().split('T')[0];
    let params = new HttpParams().set('source', source).set('destination', destination).set('date', finalDate);
    return this.http.get<Flight[]>(this.baseUrl + `/all`, { params: params });
  }

  getSources(){
    return this.http.get<string[]>(this.baseUrl + '/sources');
  }

  getDestinations() {
    return this.http.get<string[]>(this.baseUrl + '/destinations');
  }

  bookFlight(flight: Flight) {
    this.selectedFlight = flight;
    this.router.navigate(['/dashboard/passenger-detail']);
  }

  isFlightSelected(): boolean {
    return this.selectedFlight !== null;
  }

  getSelectedFlight()
  {
    return this.selectedFlight;
  }

  setSelectedFlight(){
    this.selectedFlight = null;
  }
  isBookingDetailComplete() {
    return this.bookingRequest !== undefined;
  }
  addPassenger(passenger: BookingRequest): any {
    this.bookingRequest = passenger;
    this.bookingRequest.flight_code = this.selectedFlight.flight_code;
    this.router.navigate(['/dashboard/payment']);
  }

  getBookingDetail() {
    return this.bookingRequest;
  }

  bookTicket() {
    return this.http.post(this.baseUrl + '/book', this.bookingRequest);
  }
  getBookedTicket()
  {
    return this.ticket;
  }
  setBookedTicket(ticket:any)
  {
    this.ticket = ticket;
  }
  removeTicket()
  {
    this.ticket = undefined;
  }

}
