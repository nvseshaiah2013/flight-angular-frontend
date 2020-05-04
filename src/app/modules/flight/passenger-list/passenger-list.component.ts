import { Component, OnInit, OnDestroy} from '@angular/core';
import { PassengerService } from '../passenger.service';
import { Passenger } from 'src/app/models/passenger.model';
import { FlightService } from '../flight.service';
import { faMousePointer} from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import { faRupeeSign, faBusinessTime, faCalendar, faArrowCircleLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { BookingRequest } from 'src/app/models/booking-request.model';
import { Router, NavigationEnd } from '@angular/router';
import { flyInOut } from 'src/app/animations/route.animation';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdatePassengerComponent } from '../update-passenger/update-passenger.component';
import { Subscription } from 'rxjs';
import { Flight } from 'src/app/models/flight.model';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'src/app/services/toast.service';


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
  faArrowCircleLeft = faArrowCircleLeft;
  faPlus =faPlus;
  faRupeeSign = faRupeeSign; faBusinessTime = faBusinessTime; faCalendar = faCalendar; 
  select:boolean = false;
  private subscription:Subscription;
  private routeSubscription :Subscription;
  constructor(private service:PassengerService,private flightService:FlightService,private router:Router,
    private modalService:NgbModal,private location:Location,private toastService:ToastService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    })
     }
  passengerList:Passenger[] = [];
  flight:Flight;
  ngOnInit() {
      if(this.flightService.isFlightSelected())
         { this.select = true; 
           this.flight = this.flightService.getSelectedFlight();
          }
      // this.passengerList = this.service.getPassengerList();
      this.subscription = this.service.getPassengers().subscribe(passengers => this.passengerList = passengers,
        (err: HttpErrorResponse) => {
          if (err.status == 0) {
            this.router.navigate(['error']);
          }
          if (err.status >= 400) {
            this.toastService.setError(err.error);
            this.toastService.show();
          }
        }
        );
  }
  ngOnDestroy(){
      this.subscription.unsubscribe();
  }
  delete(id:number){
    this.service.deletePassenger(id).subscribe(data=>{
        this.router.navigate(['dashboard','passenger-list']);
    }, (err: HttpErrorResponse) => {

      if (err.status == 0) {
        this.router.navigate(['error']);
      }
      if (err.status >= 400) {
        this.toastService.setError(err.error);
        this.toastService.show();
      }});
  }

  edit(passenger:Passenger){
    const modal = this.modalService.open(UpdatePassengerComponent);
    modal.componentInstance.passenger = passenger;
  }

  onSelect(passenger:Passenger){
    let request:BookingRequest = new BookingRequest(passenger.name,passenger.age,passenger.gender,passenger.idType,passenger.idNo);
    this.flightService.addPassenger(request);
    this.router.navigate(['dashboard','payment']);
  }

  goBack(){
    this.location.back();
  }
}
