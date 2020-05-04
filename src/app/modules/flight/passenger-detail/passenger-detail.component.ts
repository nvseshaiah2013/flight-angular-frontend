import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faBroom, faHeart, faCalendar, faBusinessTime, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { flyInOut } from '../../../animations/route.animation';
import { FlightService } from '../flight.service';
import { PassengerService } from '../passenger.service';
import { IdentityValidator } from '../identity.validation';
import { Flight } from 'src/app/models/flight.model';
import { LoadingService } from 'src/app/services/loading.service';
import { delay } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';



@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [flyInOut()]
})
export class PassengerDetailComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  faBroom = faBroom;
  faHeart = faHeart;
  faRupeeSign = faRupeeSign;
  faCalendar = faCalendar;
  faBusinessTime = faBusinessTime;
  passengerForm: FormGroup;
  submitted: boolean = false;
  add: boolean = true;
  flight: Flight;
  genders = [
    { value: 'Male', name: 'Male ' },
    { value: 'Female', name: 'Female' },
    { value: 'Other', name: 'Other' }]
  identities = [
    { value: 'PAN', name: 'PAN Card' },
    { value: 'Aadhar', name: 'Aadhar Card' },
    { value: 'DL', name: 'Driving License' },
    { value: 'Passport', name: 'Passport' }]
  constructor(private builder: FormBuilder, private flightService: FlightService, private passengerService: PassengerService,
     private loader: LoadingService,private router:Router,private toastService:ToastService) { }

  ngOnInit() {
    this.passengerForm = this.builder.group({
      name: ['', [Validators.required, Validators.pattern("([a-zA-Z]+[ ]?)+"), Validators.maxLength(50)]],
      age: ['', [Validators.required, Validators.pattern("[0-9]{1,}"), Validators.min(5), Validators.max(122)]],
      gender: ['', Validators.required],
      idType: ['', Validators.required],
      idNo: ['', [Validators.required]]

    });
    this.flight = this.flightService.getSelectedFlight();
  }
  addPassengerForm() {
    this.submitted = true;
    if (this.passengerForm.invalid) {
      return;
    }
    if (this.add) {
      this.loader.show();
      this.passengerService.savePassenger(this.passengerForm.value).pipe(delay(2000))
      .subscribe(data => 
        { this.loader.hide() 
        this.flightService.addPassenger(this.passengerForm.value);
        }, 
        (err:HttpErrorResponse) => { 
        
          if(err.status == 0)
            {
                this.router.navigate(['error']);
            }
          else if(err.status >= 400)
          {
            this.toastService.setError(err.error);
            this.toastService.show();
          }
          this.loader.hide();
       });
    }
    

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
