import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }
  baseUrl = 'http://localhost:8080/tickets';
  getTickets()
  {
    return this.http.get<Ticket[]>(this.baseUrl + '/all');
  }

  cancelTicket(ticketId:number)
  { 
      return this.http.post(this.baseUrl + '/cancel',{ticket_id:ticketId});  
  }
}
