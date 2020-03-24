import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm:FormGroup;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.paymentForm = this.builder.group({
      name:['',[Validators.required]],
      cardNo:['',[Validators.required]],
      month:['',[Validators.required]],
      year:['',[Validators.required]],
      cvv:['',[Validators.required]]
    })
  }
  payForm(){}
}
