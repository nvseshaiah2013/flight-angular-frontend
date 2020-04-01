import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/models/ticket.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  cancelledTicket:Ticket;
  constructor(private http:HttpClient,private router:Router) { }
  baseUrl = 'http://localhost:8080/tickets';
  getTickets()
  {
    return this.http.get<Ticket[]>(this.baseUrl + '/all');
  }

  cancelTicket(ticketId:number)
  { 
      return this.http.post(this.baseUrl + '/cancel',{ticket_id:ticketId});  
  }

  setCancelTicket(ticket:Ticket){
    this.cancelledTicket = ticket;
    this.router.navigate(['/dashboard/ticket-status']);
  }

  getCancelTicket()
  {
    return this.cancelledTicket;
  }

}
