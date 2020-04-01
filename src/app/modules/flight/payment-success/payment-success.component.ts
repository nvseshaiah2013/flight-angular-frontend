import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class PaymentSuccessComponent implements OnInit {
  faCheckCircle=faCheckCircle;
  faDoorClosed = faDoorClosed;
  constructor(public activeModal:NgbActiveModal,private router:Router) { }

  ngOnInit() {
  }
  viewTicket()
  {
    this.router.navigate(['/dashboard/view-ticket']);
    this.activeModal.close();
  }
  close()
  {
    this.activeModal.close();
    this.router.navigate(['/dashboard/ticket-list']);
  }
}
