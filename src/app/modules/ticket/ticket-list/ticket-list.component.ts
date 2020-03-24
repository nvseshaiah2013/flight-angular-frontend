import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket.model';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  private tickets:Ticket[];
  constructor() { }

  ngOnInit() {
  }
  getTickets()
  {
    return this.getTickets();
  }
}
