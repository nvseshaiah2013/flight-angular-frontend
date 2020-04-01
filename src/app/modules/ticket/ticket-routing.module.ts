import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { CancelTicketSuccessComponent } from './cancel-ticket-success/cancel-ticket-success.component';
import { CancelTicketGaurdService } from './cancel-ticket-gaurd.service';


const routes: Routes = [{
  path:'',component:DashboardComponent,children:[
    {path:'',redirectTo:'ticket-list',pathMatch:'full'},
    {path:'ticket-list',component:TicketListComponent},
    {path:'ticket-status',component:CancelTicketSuccessComponent,canActivate:[CancelTicketGaurdService]},
    {path:'**',redirectTo:'ticket-list'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
