import { Injectable } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TicketGaurdService implements CanActivate{

  constructor(private flightService:FlightService,private router:Router) { }

  canActivate(): boolean {
    if (this.flightService.getBookedTicket() !== undefined) {
      return true;
    }
    this.router.navigate(['/dashboard/search-flight']);
    return false;
  }
}
