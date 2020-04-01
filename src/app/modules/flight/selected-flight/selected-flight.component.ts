import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnChanges,OnDestroy, SimpleChanges } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faWindowClose, faRupeeSign, faClock, faCalendarAlt, faMapPin, faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-selected-flight',
  templateUrl: './selected-flight.component.html',
  styleUrls: ['./selected-flight.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectedFlightComponent implements OnInit,OnChanges,OnDestroy {

  @Input('flight') flight:Flight;
  faDoorClosed = faWindowClose;
  faRupeeSign = faRupeeSign;
  faClock = faClock;
  faCalendarAlt = faCalendarAlt;
  faMapPin = faMapPin;
  faMapSigns = faMapSigns;
  constructor(private service:FlightService,public activeModal:NgbActiveModal) {
     
   }

  ngOnInit() {
      
      
  } 


  ngOnDestroy(){
    
  }

  ngOnChanges(changes:SimpleChanges){
    
  }
  onContinue()
  {
    this.activeModal.close();
    this.service.bookFlight(this.flight);
  }
}
