import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelope, faSms } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faPhone=faPhone;
  faEnvelope=faEnvelope;
  faSms = faSms;
  constructor() { }

  ngOnInit() {
  }

}
