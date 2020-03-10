import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import {NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  faSearchLocation=faSearchLocation;
  searchFlightForm:FormGroup; 
  faCalendarAlt = faCalendarAlt;
  submitted:boolean = true;
  model:NgbDate;
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.searchFlightForm = this.builder.group({
      source:['',[Validators.required]],
      destination:['',[Validators.required]],
      date:['',[Validators.required]]
    });
  }
  searchFlight(){
    this.submitted = true;
    
  }

}
