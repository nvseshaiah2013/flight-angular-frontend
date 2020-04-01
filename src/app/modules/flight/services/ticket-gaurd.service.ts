import { Injectable } from '@angular/core';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TicketGaurdService {

  constructor(private flightService:FlightService,private router:Router) { }

  canActivate(): boolean {
    if (this.flightService.getBookedTicket() !== undefined) {
      return true;
    }
    this.router.navigate(['/dashboard/search-flight']);
    return false;
  }
}
