import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket.model';
import { TicketService } from '../ticket.service';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  private tickets: Ticket[];
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.getTickets();
  }


  getTickets() {
    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data;
    }, err => {
      console.log(err);
    })
  }

  getTicketList() {
    return this.tickets;
  }
}
