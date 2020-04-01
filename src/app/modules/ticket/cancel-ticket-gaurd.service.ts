import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TicketService } from './ticket.service';

@Injectable({
  providedIn: 'root'
})
export class CancelTicketGaurdService {

  constructor(private service:TicketService,private router:Router) { }

  canActivate():boolean{
    if(this.service.getCancelTicket() !== undefined)
    {
      return true;
    }
    this.router.navigate(['/dashboard/ticket-list']);
    return false;
  }
}
