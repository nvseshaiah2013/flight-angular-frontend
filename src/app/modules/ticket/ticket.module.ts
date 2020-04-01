import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule} from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket/ticket.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketModalComponent } from './ticket-modal/ticket-modal.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { CancelTicketSuccessComponent } from './cancel-ticket-success/cancel-ticket-success.component';


@NgModule({
  declarations: [TicketComponent, TicketListComponent, TicketModalComponent, CancelTicketComponent, CancelTicketSuccessComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents:[CancelTicketComponent,TicketModalComponent]
})
export class TicketModule { }
