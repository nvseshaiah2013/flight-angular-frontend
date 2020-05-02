import { Component, OnInit } from '@angular/core';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/modules/user/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/modules/flight/flight.service';

// const jwt = new JwtHelperService();

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed:boolean = true;
  faEllipsisH = faEllipsisH;
  username:string  = 'UserA';
  
  constructor(private user:UserService,private jwt:JwtHelperService,private flightService:FlightService) { }

  ngOnInit(): void {
    this.username = this.jwt.decodeToken(localStorage.getItem('$F#R%S_ToKeN')).sub.split('@')[0];
    
  }
   
  logOut()
  {
    this.user.logOutUser();
  }

  resetFlight(){
    this.flightService.setSelectedFlight();
  }

}
