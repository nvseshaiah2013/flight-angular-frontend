import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FlightService } from '../flight.service';

@Injectable({
  providedIn: 'root'
})
export class BookingGaurdService {

  constructor(private flightService: FlightService, private router: Router) { }

  canActivate(): boolean {
    if (this.flightService.isFlightSelected())
      return true;
    this.router.navigate(['/dashboard']);
    return false;
  }
}
