import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input('ticket') ticket;
  
  constructor(private ticketService:TicketService) { }

  ngOnInit() {
  }
  cancelTicket(ticket:Ticket)
  { 
    this.ticketService.cancelTicket(ticket.ticket_id).subscribe(data=>{
      console.log(data);
    },err=>console.log(err));
  }

}
