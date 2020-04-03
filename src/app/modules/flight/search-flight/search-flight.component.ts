import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { faSearchLocation, faCalendarCheck, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { FlightService } from '../flight.service';
import { Flight } from '../../../models/flight.model';
import { DateValidate } from '../date.validation';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

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
  submitted: boolean = false;
  model;
  flights: Flight[] =[];
  searched:boolean =false;
  private minDate = new Date();
  todayDate: NgbDate = new NgbDate(this.minDate.getFullYear(), this.minDate.getMonth() + 1, this.minDate.getDate());
  constructor(private builder: FormBuilder, private service: FlightService) {

  }

  ngOnInit(): void {
    this.searchFlightForm = this.builder.group({
      source: ['', [Validators.required,Validators.pattern("([a-zA-Z]+[ ]?)+")]],
      destination: ['', [Validators.required, Validators.pattern("([a-zA-Z]+[ ]?)+")]],
      date: ['', [Validators.required,DateValidate]]
    }); 
        
  }
  searchFlight() {
    this.submitted = true;
    if(this.searchFlightForm.invalid)
    {
      return;
    }
    console.log(this.searchFlightForm.value);
    this.searched = true;
    this.getFlights();
  }
  getFlights() {
    let flightData = this.searchFlightForm.controls;
    this.service.getFlights(flightData.source.value,
       flightData.destination.value,
        flightData.date.value).subscribe(data => {
          
      this.flights = data;
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
 
}
