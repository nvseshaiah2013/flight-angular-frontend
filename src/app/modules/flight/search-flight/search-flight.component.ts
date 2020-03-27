import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faSearchLocation, faCalendarCheck, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { FlightService } from '../flight.service';
import { Flight } from '../../../models/flight.model';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  faSearchLocation = faSearchLocation;
  searchFlightForm: FormGroup;
  faCalendarCheck = faCalendarCheck;
  faPlaneDeparture = faPlaneDeparture;
  faPlaneArrival = faPlaneArrival;
  submitted: boolean = true;
  model;
  flights: Flight[] = [];
  constructor(private builder: FormBuilder, private service: FlightService) {
    this.getFlights();
   
   }

  ngOnInit(): void {
    this.searchFlightForm = this.builder.group({
      source: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      date: ['', [Validators.required]]
    });
  }
  searchFlight() {
    this.submitted = true;
  }
  getFlights() {
    this.service.getFlights().subscribe(data => {
      this.flights = data;
      console.log(data);
    }, err => {
      console.log(err.stack);
    })
  }
 
}
