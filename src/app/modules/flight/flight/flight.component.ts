import { Component, OnInit,Input } from '@angular/core';
import { Flight } from '../../../models/flight.model';
import { faMapMarkerAlt,faChevronDown,faThumbsUp,faRupeeSign,faBalanceScaleLeft } from '@fortawesome/free-solid-svg-icons';
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
  constructor() { }

  ngOnInit() {
  }
  showDetail()
  {
    this.show = !this.show;
  }
}
