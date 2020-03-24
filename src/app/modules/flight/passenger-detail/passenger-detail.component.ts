import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnInit {

  passengerForm:FormGroup;
  submitted:boolean = false;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.passengerForm = this.builder.group({
      name:[''],
      age:[''],
      gender:[''],
      idType:[''],
      idNo:['']
    });
  }
  addPassengerForm(){

  }

}
