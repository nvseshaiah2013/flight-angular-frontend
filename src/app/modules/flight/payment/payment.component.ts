import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { FlightService } from '../flight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentSuccessComponent } from '../payment-success/payment-success.component';
import { Ticket } from 'src/app/models/ticket.model';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { flyInOut } from '../../../animations/route.animation';
import { delay } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [flyInOut()]
})
export class PaymentComponent implements OnInit {
  paymentForm:FormGroup;
  submitted:boolean = false;
  amount:number;
  faRupeeSign = faRupeeSign;
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
  constructor(private builder:FormBuilder,private flightService:FlightService,private modalService:NgbModal,
    private loader:LoadingService,private router:Router,private toastService:ToastService) { }

  ngOnInit() {
    this.paymentForm = this.builder.group({
      name: ['', [Validators.required, Validators.pattern("([a-zA-Z]+[ ]?)+")]],
      cardNo:['',[Validators.required,Validators.pattern("[1-9][0-9]{15}")]],
      month:[,[Validators.required]],
      year:[,[Validators.required]],
      cvv:['',[Validators.required,Validators.pattern("[0-9]{3}")]]
    });
    this.amount = this.flightService.getSelectedFlight().price;
  }
  payForm(){
    this.submitted = true;
    if(this.paymentForm.invalid)
    {
      return;
    }
    this.loader.show();
    this.flightService.bookTicket().pipe(delay(1000))
    .subscribe(data=>{
      this.flightService.setBookedTicket(data);
      this.loader.hide();
      this.flightService.setSelectedFlight();
      this.paySuccess();
    }, (err: HttpErrorResponse) => {
      if (err.status == 0) {
        this.router.navigate(['error']);
      }
      if (err.status >= 400) {
        this.toastService.setError(err.error);
        this.toastService.show();
      }
      this.loader.hide();
    })
  }

  paySuccess()
  {
    const modal = this.modalService.open(PaymentSuccessComponent,{centered:true})    
  }

}
