import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlightService } from '../flight.service';
import { Ticket } from 'src/app/models/ticket.model';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { flyInOut} from '../../../animations/route.animation';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [flyInOut()]
})
export class ViewTicketComponent implements OnInit,OnDestroy {

  ticket:Ticket;
  constructor(private service:FlightService) { }
  faCheckSquare = faCheckSquare;
  ngOnInit() {
    this.ticket = this.service.getBookedTicket();
  }
  ngOnDestroy(){
    this.service.removeTicket();
    this.ticket = undefined;
  }

}
