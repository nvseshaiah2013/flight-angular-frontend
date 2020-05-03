import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/user.model';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faUserTie, faTicketAlt} from '@fortawesome/free-solid-svg-icons';
import { FlightService } from 'src/app/modules/flight/flight.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUser:User;
  faGlobeAsia = faGlobeAsia;
  faUserTie = faUserTie;
  faSearch = faSearch;
  faListAlt = faListAlt;
  faTicketAlt = faTicketAlt;
  constructor(private service:UserService,private flightService:FlightService,
    private router:Router,
    private toastService:ToastService) {
  }
  
  ngOnInit(): void {
    this.getUser();
      
  }
  getUser()
  {
    this.service.getUser().subscribe(data => {
      this.currentUser = data;
    }, (err:HttpErrorResponse)=>{
      if(err.status == 0){
        this.router.navigate(['error']);
      }
      if(err.status >= 400 ){
        this.toastService.setError(err.error);
        this.toastService.show();
      }
    });
  }
  resetFlight() {
    this.flightService.setSelectedFlight();
  }
}
