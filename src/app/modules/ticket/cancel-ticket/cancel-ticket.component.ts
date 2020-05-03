import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from '../ticket.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';



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
  constructor(public activeModal:NgbActiveModal,private service:TicketService,
    private router:Router,private toastService:ToastService) { }

  ngOnInit() {
  }
  cancelTicket() {
    this.service.cancelTicket(this.ticket.ticket_id).subscribe(data => {
      this.activeModal.close();
       this.toReload.emit(this.ticket);
    }, (err:HttpErrorResponse) => {
        if (err.status == 0) {
          this.router.navigate(['error']);
        }
        if (err.status >= 400) {
          this.toastService.setError(err.error);
          this.toastService.show();
        }
        this.activeModal.close();
        this.toReload.emit(undefined);
    }
    );
  }
}
