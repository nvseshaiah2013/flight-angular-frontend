import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PassengerService } from '../passenger.service';
import { Passenger } from 'src/app/models/passenger.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faEdit,faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { IdentityValidator } from '../identity.validation';
import { LoadingService } from 'src/app/services/loading.service';
import { delay } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from 'src/app/services/toast.service';

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


  genders = [
    { value: 'Male', name: 'Male ' },
    { value: 'Female', name: 'Female' },
    { value: 'Other', name: 'Other' }]
  identities = [
    { value: 'PAN', name: 'PAN Card' },
    { value: 'Aadhar', name: 'Aadhar Card' },
    { value: 'DL', name: 'Driving License' },
    { value: 'Passport', name: 'Passport' }]

  constructor(private builder:FormBuilder,private service:PassengerService,public activeModal:NgbActiveModal,private router:Router,
    private loader:LoadingService,private toastService:ToastService) { 
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
      name: ['', [Validators.required, Validators.pattern("([a-zA-Z]+[ ]?)+")]],
      age: ['', [Validators.required, Validators.pattern("[0-9]{1,}"), Validators.min(5), Validators.max(120)]],
      gender: ['', Validators.required],
      idType: ['', Validators.required],
      idNo: ['', [Validators.required]]
    });
      this.passengerForm.patchValue(this.passenger);
    let value = this.passenger.idType;
    if (value == 'PAN') {
      this.passengerForm.controls['idNo'].setValidators([Validators.required, IdentityValidator.isValidPAN]);
      this.passengerForm.controls['idNo'].updateValueAndValidity();
    }
    else if (value == 'Aadhar') {
      this.passengerForm.controls['idNo'].setValidators([Validators.required, IdentityValidator.isValidAadhar]);
      this.passengerForm.controls['idNo'].updateValueAndValidity();
    }
    else if (value == 'Passport') {
      this.passengerForm.controls['idNo'].setValidators([Validators.required, IdentityValidator.isValidPassport]);
      this.passengerForm.controls['idNo'].updateValueAndValidity();
    }
    else if (value == 'DL') {
      this.passengerForm.controls['idNo'].setValidators([Validators.required, IdentityValidator.isValidDrivingLicense]);
      this.passengerForm.controls['idNo'].updateValueAndValidity();
    }
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }


  editPassengerForm() {
    this.submitted = true;
    if (this.passengerForm.invalid) {
      return;
    }
    this.loader.show();
    this.service.editPassenger(this.passengerForm.value).pipe(delay(2000)).subscribe(data=>{
      this.loader.hide();
      this.service.reload();
    },(err:HttpErrorResponse)=>{
      if(err.status == 0){
        this.router.navigate(['error']);
      }
      if(err.status >= 400 ){
        this.toastService.setError(err.error);
        this.toastService.show();
      }
      this.loader.hide();
      console.log(err);
    });
    this.activeModal.close();
  }

  onIdentityChange(e) {
    if (e.target.value == 'PAN') {
      this.passengerForm.controls['idNo'].setValidators([Validators.required, IdentityValidator.isValidPAN]);
      this.passengerForm.controls['idNo'].updateValueAndValidity();
    }
    else if (e.target.value == 'Aadhar') {
      this.passengerForm.controls['idNo'].setValidators([Validators.required, IdentityValidator.isValidAadhar]);
      this.passengerForm.controls['idNo'].updateValueAndValidity();
    }
    else if (e.target.value == 'Passport') {
      this.passengerForm.controls['idNo'].setValidators([Validators.required, IdentityValidator.isValidPassport]);
      this.passengerForm.controls['idNo'].updateValueAndValidity();
    }
    else if (e.target.value == 'DL') {
      this.passengerForm.controls['idNo'].setValidators([Validators.required, IdentityValidator.isValidDrivingLicense]);
      this.passengerForm.controls['idNo'].updateValueAndValidity();
    }
  }

}
