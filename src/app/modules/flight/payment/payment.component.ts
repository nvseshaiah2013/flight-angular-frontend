import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FlightService } from '../flight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentSuccessComponent } from '../payment-success/payment-success.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm:FormGroup;
  submitted:boolean = false;
  years=[
   
    { value: '2021', name: 2021 },
    { value: '2022', name: 2022 },
    { value: '2023', name: 2023 },
    { value: '2024', name: 2024 },
    { value: '2025', name: 2025 },
    { value: '2026', name: 2026 },
    { value: '2027', name: 2027 },
    { value: '2028', name: 2028 },
    { value: '2029', name: 2029 },
    { value: '2030', name: 2030 }
  ];

  months=[
    {value:'01',name: 'January - 01'},
    { value: '02', name: 'February - 02' },
    { value: '03', name: 'March - 03' },
    { value: '04', name: 'April - 04' },
    { value: '05', name: 'May - 05' },
    { value: '06', name: 'June - 06' },
    { value: '07', name: 'July - 07' },
    { value: '08', name: 'August - 08' },
    { value: '09', name: 'September - 09' },
    { value: '10', name: 'October - 10' },
    { value: '11', name: 'November - 11' },
    { value: '12', name: 'December - 12' }
  ]
  constructor(private builder:FormBuilder,private flightService:FlightService,private modalService:NgbModal) { }

  ngOnInit() {
    this.paymentForm = this.builder.group({
      name:['',[Validators.required,Validators.pattern("[a-zA-Z ]{2,}")]],
      cardNo:['',[Validators.required,Validators.pattern("[1-9][0-9]{15}")]],
      month:[,[Validators.required]],
      year:[,[Validators.required]],
      cvv:['',[Validators.required,Validators.pattern("[0-9]{3}")]]
    });
  }
  payForm(){
    this.submitted = true;
    if(this.paymentForm.invalid)
    {
      console.error(this.paymentForm.errors);
      return;
    }
    this.flightService.bookTicket()
    .subscribe(data=>{
      console.log(data);
      this.paySuccess();
    },err=>{
      console.log(err);
    })
  }

  paySuccess()
  {
    const modal = this.modalService.open(PaymentSuccessComponent,{centered:true})
    
  }

}
