import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnInit {

  passengerForm:FormGroup;
  submitted:boolean = false;
  constructor(private builder:FormBuilder,private flightService:FlightService) { }

  ngOnInit() {
    this.passengerForm = this.builder.group({
      name:['',[Validators.required,Validators.pattern("[a-zA-Z ]{2,}")]],
      age:['',[Validators.required,Validators.pattern("[0-9]{1,}"),Validators.min(5),Validators.max(120)]],
      gender:['',Validators.required],
      idType:['',Validators.required],
      idNo:['',[Validators.required,Validators.pattern("[A-Za-z0-9]{5,}")]]
    });
    
  }
  addPassengerForm(){
    this.submitted = true;
    if(this.passengerForm.invalid)
    {
      return;
    }
    this.flightService.addPassenger(this.passengerForm.value);
    
  }

}
