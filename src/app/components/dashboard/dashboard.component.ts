import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { FlightService } from 'src/app/modules/flight/flight.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
   // this.onFlightSelected();
  }
  // onFlightSelected()
  // {
  //   this.service.flightSelected.subscribe(data=>{
  //       this.selectedFlight = data;
  //   },err=>{
  //     console.log(err);
  //   })
  // }
}
