import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  baseUrl = 'http://localhost:3000/flights';
  constructor(private http:HttpClient) { }

  getFlights()
  {
    return this.http.get<Flight[]>(this.baseUrl);
  }
}
