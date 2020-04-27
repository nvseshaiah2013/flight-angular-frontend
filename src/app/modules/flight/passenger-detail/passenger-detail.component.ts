import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { FlightService } from '../flight.service';
import { flyInOut } from '../../../animations/route.animation';
import { PassengerService } from '../passenger.service';
import { faPlusSquare, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBroom } from '@fortawesome/free-solid-svg-icons';

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
  passengerForm:FormGroup;
  submitted:boolean = false;
  add:boolean = true;
  constructor(private builder:FormBuilder,private flightService:FlightService,private passengerService:PassengerService) { }

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
    if(this.add)
    this.passengerService.savePassenger(this.passengerForm.value).subscribe(data=>{},err=>{});
    this.flightService.addPassenger(this.passengerForm.value);
    
  }

}
