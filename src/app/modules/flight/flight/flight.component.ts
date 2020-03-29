import { Component, OnInit,Input } from '@angular/core';
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
  constructor(private flightService:FlightService) { }

  ngOnInit() {
  }
  showDetail()
  {
    this.show = !this.show;
  }

  bookTicket(flight_code:string)
  {
    this.flightService.bookFlight(flight_code).subscribe(data=>{
      console.log(data);
    },
    err=>{
      console.log(err);
    })
  }
}
