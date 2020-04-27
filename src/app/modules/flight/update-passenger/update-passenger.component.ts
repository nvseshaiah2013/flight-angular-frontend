import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassengerService } from '../passenger.service';
import { Passenger } from 'src/app/models/passenger.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faEdit,faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { Router, NavigationEnd } from '@angular/router';
import { PassengerListComponent } from '../passenger-list/passenger-list.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-passenger',
  templateUrl: './update-passenger.component.html',
  styleUrls: ['./update-passenger.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class UpdatePassengerComponent implements OnInit,OnDestroy {

  @Input("passenger")
  passenger: Passenger;
  faEdit = faEdit;
  faTimesCircle = faTimesCircle;
  passengerForm:FormGroup;
  submitted:boolean = false;
  routeSubscription:Subscription;
  constructor(private builder:FormBuilder,private service:PassengerService,public activeModal:NgbActiveModal,private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = ()=>{
      return false;
    }
    this.routeSubscription = this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        this.router.navigated = false;
      }
    })
  }

  ngOnInit() {
    this.passengerForm = this.builder.group({
      passenger_id:['',Validators.required],
      name: ['', [Validators.required, Validators.pattern("[a-zA-Z ]{2,}")]],
      age: ['', [Validators.required, Validators.pattern("[0-9]{1,}"), Validators.min(5), Validators.max(120)]],
      gender: ['', Validators.required],
      idType: ['', Validators.required],
      idNo: ['', [Validators.required, Validators.pattern("[A-Za-z0-9]{5,}")]],
      isValid:[]
    });
      this.passengerForm.patchValue(this.passenger);
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }


  editPassengerForm() {
    this.submitted = true;
    if (this.passengerForm.invalid) {
      return;
    }
    this.passengerForm.controls.isValid.setValue(1);
    console.log(this.passengerForm.value);
    this.service.editPassenger(this.passengerForm.value).subscribe(data=>{
      this.service.reload();
    },err=>{
      console.log(err);
    });
    this.activeModal.close();
  }

}
