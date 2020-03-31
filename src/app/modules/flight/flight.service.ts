import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flight } from '../../models/flight.model';
import { Router } from '@angular/router';
import { BookingGaurdService } from './services/booking-gaurd.service';
import { BookingRequest } from 'src/app/models/booking-request.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FlightService {
  // @Output() flightSelected:EventEmitter<Flight> = new EventEmitter<Flight>();
  // flightSelected: BehaviorSubject<Flight> = new BehaviorSubject(null);

  baseUrl = 'http://localhost:8080/flights';
  constructor(private http: HttpClient, private router: Router) { }
  private selectedFlight: Flight = null;
  private bookingRequest: BookingRequest = undefined;

  getFlights(source: string, destination: string, date) {
    let selectedDate = new Date(date.year, date.month - 1, date.day + 1).toISOString().split('T')[0];
    let params = new HttpParams().set('source', source).set('destination', destination).set('date', selectedDate);
    console.log(params);
    return this.http.get<Flight[]>(this.baseUrl + `/all`, { params: params });
  }

  bookFlight(flight: Flight) {
    this.selectedFlight = flight;
    this.router.navigate(['/dashboard/passenger-detail']);
  }

  isFlightSelected(): boolean {
    return this.selectedFlight !== null;
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
  // onFlightSelect(flight: Flight) {

  //   this.selectedFlight = flight;
  //   this.flightSelected.next(flight)
  // }
  onFlightSelect()
  {
    
  }

}
