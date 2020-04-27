import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { PassengerService } from '../passenger.service';
import { Passenger } from 'src/app/models/passenger.model';
import { FlightService } from '../flight.service';
import { faMousePointer} from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { BookingRequest } from 'src/app/models/booking-request.model';
import { Router } from '@angular/router';
import { flyInOut } from 'src/app/animations/route.animation';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdatePassengerComponent } from '../update-passenger/update-passenger.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [flyInOut()]
})
export class PassengerListComponent implements OnInit,OnDestroy {
  faMousePointer = faMousePointer;
  faTrashAlt = faTrashAlt;
  faEdit = faEdit;
  select:boolean = false;
  private subscription:Subscription;
  constructor(private service:PassengerService,private flightService:FlightService,private router:Router,private modalService:NgbModal) { }
  passengerList:Passenger[] = [];
  ngOnInit() {
      if(this.flightService.isFlightSelected())
        this.select = true;
      // this.passengerList = this.service.getPassengerList();
      this.subscription = this.service.getPassengers().subscribe(passengers => this.passengerList = passengers,error=>console.log(error));
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
  delete(id:number){
    this.service.deletePassenger(id).subscribe(data=>{
      this.service.getPassengers().subscribe(passengers=> this.passengerList = passengers,err=>{})
    },err=>{});
  }

  edit(passenger:Passenger){
    const modal = this.modalService.open(UpdatePassengerComponent);
    modal.componentInstance.passenger = passenger;
  }

  onSelect(passenger:Passenger){
    console.log(passenger);
    let request:BookingRequest = new BookingRequest(passenger.name,passenger.age,passenger.gender,passenger.idType,passenger.idNo);
    this.flightService.addPassenger(request);
    this.router.navigate(['dashboard','payment']);
  }
}
