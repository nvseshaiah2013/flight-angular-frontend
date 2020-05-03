import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../models/ticket.model';
import { TicketService } from '../ticket.service';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { flyInOut } from '../../../animations/route.animation';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [flyInOut()]
})
export class TicketListComponent implements OnInit {
  private tickets: Ticket[];
  private ticketsView:Ticket[]=[];
  faAddressCard = faAddressCard;
  constructor(private ticketService: TicketService,
    private router:Router,private toastService:ToastService) {
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
    }, (err:HttpErrorResponse) => {
        if (err.status == 0) {
          this.router.navigate(['error']);
        }
        if (err.status >= 400) {
          this.toastService.setError(err.error);
          this.toastService.show();
        }
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
