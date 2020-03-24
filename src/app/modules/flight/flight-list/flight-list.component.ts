import { Component, OnInit,Input } from '@angular/core';
import { Flight } from '../../../models/flight.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  @Input('flightList') flightList:Flight[];
  constructor() { }

  ngOnInit() {

  }

}
