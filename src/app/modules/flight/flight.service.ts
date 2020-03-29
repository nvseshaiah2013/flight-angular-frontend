import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flight } from '../../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  baseUrl = 'http://localhost:8080/flights';
  constructor(private http:HttpClient) { }

  getFlights(source:string,destination:string,date)
  {       
    let selectedDate = new Date(date.year,date.month,date.day);
    console.log(selectedDate.toISOString().split('T')[0]);    
    return this.http.get<Flight[]>(this.baseUrl + `/all?source=${source}&destination=${destination}&date=${selectedDate.toISOString().split('T')[0]}`);
  }

  bookFlight(flight_code:string)
  {
    console.log(flight_code);
    return this.http.post(this.baseUrl + '/book',{flight_code:flight_code});
  }
 
  
}
