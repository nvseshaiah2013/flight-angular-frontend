import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ticket } from 'src/app/models/ticket.model';
import { faDoorClosed, faTimes, faRupeeSign, faHotel, faPhoneSlash, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-ticket-modal',
  templateUrl: './ticket-modal.component.html',
  styleUrls: ['./ticket-modal.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TicketModalComponent implements OnInit {
  @Input('ticket') ticket:Ticket;
  faDoorClosed = faDoorClosed;
  faCross = faTimes;
  faRupeeSign = faRupeeSign;
  faHotel = faHotel;
  faPhoneSlash = faPhoneSlash;
  faPhoneSquare = faPhoneSquare;
  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit() {
    
  }
  

}
