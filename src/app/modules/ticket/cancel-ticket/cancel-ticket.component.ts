import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from '../ticket.service';



@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CancelTicketComponent implements OnInit {
  faDoorClosed = faDoorClosed;
  @Output() toReload = new EventEmitter<Ticket>();
  ticket:Ticket;
  constructor(public activeModal:NgbActiveModal,private service:TicketService) { }

  ngOnInit() {
  }
  cancelTicket() {
    this.service.cancelTicket(this.ticket.ticket_id).subscribe(data => {
      this.activeModal.close();
       this.toReload.emit(this.ticket);
    }, err => {console.log(err);
        this.activeModal.close();
        this.toReload.emit(undefined);
    }
    );
  }
}
