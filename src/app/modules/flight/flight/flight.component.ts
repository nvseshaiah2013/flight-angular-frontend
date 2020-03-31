import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Flight } from '../../../models/flight.model';
import { faMapMarkerAlt,faChevronDown,faThumbsUp,faRupeeSign,faBalanceScaleLeft } from '@fortawesome/free-solid-svg-icons';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  @Input('flight') flight:Flight;
  faMapMarkerAlt = faMapMarkerAlt;
  faChevronDown = faChevronDown;
  faThumbsUp = faThumbsUp;
  faRupeeSign = faRupeeSign;
  faBalanceScaleLeft=faBalanceScaleLeft;
  show:boolean = false;

  @Output() chooseFlight = new EventEmitter<Flight>();
  constructor(private flightService:FlightService) { }

  ngOnInit() {
  }
  showDetail()
  {
    this.show = !this.show;
  }

  bookTicket(flight:Flight)
  {
    // this.flightService.bookFlight(flight);
    // this.flightService.onFlightSelect(flight);
    console.log('jj');
    this.chooseFlight.emit(flight);
  }
}
