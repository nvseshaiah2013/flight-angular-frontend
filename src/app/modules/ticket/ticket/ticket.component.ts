import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';
import { TicketService } from '../ticket.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CancelTicketComponent } from '../cancel-ticket/cancel-ticket.component';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { CancelTicketSuccessComponent } from '../cancel-ticket-success/cancel-ticket-success.component';
import { TicketModalComponent } from '../ticket-modal/ticket-modal.component';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  @Input('ticket') ticket;
  faRupeeSign = faRupeeSign;
  constructor(private modalService:NgbModal,private service:TicketService) { }

  ngOnInit() {
  }
 
  openModal()
  {
    const modal = this.modalService.open(CancelTicketComponent,{centered:true,size:'lg'});
    modal.componentInstance.ticket = this.ticket;
    modal.componentInstance.toReload.subscribe(($event)=>{
      this.service.setCancelTicket($event);
    })
  }
  viewTicket()
  {
    const modal = this.modalService.open(TicketModalComponent,{centered:true,size:'lg'});
    modal.componentInstance.ticket = this.ticket;
  }
}
