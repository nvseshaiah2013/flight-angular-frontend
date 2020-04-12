import { Component, OnInit,Input } from '@angular/core';
import { Flight } from '../../../models/flight.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectedFlightComponent } from '../selected-flight/selected-flight.component';
import { faSearch, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { expand } from '../../../animations/route.animation';


@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
  animations:[
    expand()
  ]
})


export class FlightListComponent implements OnInit {
  @Input('flightList') flightList:Flight[] = [];
  selectedFlight:Flight;
  @Input('searched')
  searched:boolean = false;
  faSearch = faSearch;
  faThumbsDown = faThumbsDown;
  constructor(private modalService:NgbModal) { }

  ngOnInit() {

  }
  choosenFlight(flight:Flight)
  {
    const modal = this.modalService.open(SelectedFlightComponent,{centered:true});
    modal.componentInstance.flight = flight;
  }

}
