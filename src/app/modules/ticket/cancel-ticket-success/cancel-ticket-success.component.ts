import { Component, OnInit } from '@angular/core';
import { faCheckSquare, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-cancel-ticket-success',
  templateUrl: './cancel-ticket-success.component.html',
  styleUrls: ['./cancel-ticket-success.component.css']
})
export class CancelTicketSuccessComponent implements OnInit {
  faCheckSquare = faCheckSquare;
  faArrowCircleLeft = faArrowCircleLeft;
  ticket:Ticket;
  constructor(private service:TicketService) { }

  ngOnInit() {
    this.ticket = this.service.getCancelTicket();
  }

}
