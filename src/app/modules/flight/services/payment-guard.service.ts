import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FlightService } from '../flight.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuardService implements CanActivate{

  constructor(private router:Router,private flightService:FlightService) { }

  canActivate():boolean{
    if(this.flightService.isBookingDetailComplete())
    {
      return true;
    }
    this.router.navigate(['/dashboard/search-flight']);
    return false;
  }
}
