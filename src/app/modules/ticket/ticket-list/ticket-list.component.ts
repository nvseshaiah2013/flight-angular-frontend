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
  private ticketsView:Ticket[];
  constructor(private ticketService: TicketService) {
    this.getTickets();
   }
  all;
  book;
  cancel;
  ngOnInit() {
    this.all = document.querySelector('#all');
    this.book = document.querySelector('#book');
    this.cancel = document.querySelector('#cancel');
  }


  getTickets() {
    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data;
      this.allTicks();
    }, err => {
      console.log(err);
    })
  }

  getTicketList() {
    return this.ticketsView;
  }

  allTicks(){
    this.all.classList.add('active');
    this.cancel.classList.remove('active');
    this.book.classList.remove('active');
    this.ticketsView = this.tickets;
  }
  bookedTicks()
  {
    this.all.classList.remove('active');
    this.cancel.classList.remove('active');
    this.book.classList.add('active');
    this.ticketsView = this.tickets.filter(t => t.status == 'Booked');
  }
  cancelTicks(){
    this.all.classList.remove('active');
    this.book.classList.remove('active');
    this.cancel.classList.add('active');
    this.ticketsView = this.tickets.filter(t => t.status =='Cancelled');
  }
}
