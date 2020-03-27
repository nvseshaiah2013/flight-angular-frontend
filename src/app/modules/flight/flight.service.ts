import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flight } from '../../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  baseUrl = 'http://localhost:3000/flights';
  constructor(private http:HttpClient) { }

  getFlights()
  {    
    this.getSample();
    return this.http.get<Flight[]>(this.baseUrl);
  }
  getSample()
  {
    this.http.post('http://localhost:8080/users/sample', {}).subscribe(data=>console.log(data),err=>console.log(err));
  }
  
}
