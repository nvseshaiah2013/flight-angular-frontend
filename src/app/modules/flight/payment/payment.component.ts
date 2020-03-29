import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm:FormGroup;
  submitted:boolean = false;
  constructor(private builder:FormBuilder,private flightService:FlightService) { }

  ngOnInit() {
    this.paymentForm = this.builder.group({
      name:['',[Validators.required]],
      cardNo:['',[Validators.required]],
      month:['',[Validators.required]],
      year:['',[Validators.required]],
      cvv:['',[Validators.required]]
    })
  }
  payForm(){
    this.submitted = true;
    if(this.paymentForm.invalid)
    {
      return;
    }
    this.flightService.bookTicket()
    .subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    })
  }
}
