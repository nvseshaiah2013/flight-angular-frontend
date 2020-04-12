import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { faSearchLocation, faCalendarCheck, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import { FlightService } from '../flight.service';
import { Flight } from '../../../models/flight.model';
import { DateValidate } from '../date.validation';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, delay } from 'rxjs/operators';
import { flyInOut } from '../../../animations/route.animation';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations:[flyInOut()]
})
export class SearchFlightComponent implements OnInit {
  faSearchLocation = faSearchLocation;
  searchFlightForm: FormGroup;
  faCalendarCheck = faCalendarCheck;
  faPlaneDeparture = faPlaneDeparture;
  faPlaneArrival = faPlaneArrival;
  submitted: boolean = false;
  model;
  flights: Flight[] = [];
  searched: boolean = false;
  private minDate = new Date();
  todayDate: NgbDate = new NgbDate(this.minDate.getFullYear(), this.minDate.getMonth() + 1, this.minDate.getDate());
  sources: string[] = [];
  destinations: string[] = [];
  constructor(private builder: FormBuilder, private service: FlightService,private loader:LoadingService) {

  }

  ngOnInit(): void {
    this.service.getSources().subscribe(sources => { this.sources = sources });
    this.service.getDestinations().subscribe(destinations => this.destinations = destinations);
    this.searchFlightForm = this.builder.group({
      source: ['', [Validators.required, Validators.pattern("([a-zA-Z]+[ ]?)+")]],
      destination: ['', [Validators.required, Validators.pattern("([a-zA-Z]+[ ]?)+")]],
      date: ['', [Validators.required, DateValidate]]
    });

  }

  searchSource = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.sources.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  searchDestination =(text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.destinations.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  
  searchFlight() {
    this.submitted = true;
    if (this.searchFlightForm.invalid) {
      return;
    }
    this.searched = true;
    this.getFlights();
  }
  getFlights() {
    this.loader.show();
    let flightData = this.searchFlightForm.controls;
    this.service.getFlights(flightData.source.value,
      flightData.destination.value,
      flightData.date.value).pipe(delay(2000)).subscribe(data => {
        this.loader.hide();
        this.flights = data;
      }, err => {
        console.log(err);
        this.loader.hide();
      })
  }

}
