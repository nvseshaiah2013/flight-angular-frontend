import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';


const routes: Routes = [{
  path:'',component:DashboardComponent,children:[
    {path:'',redirectTo:'ticket-list',pathMatch:'full'},
    {path:'ticket-list',component:TicketListComponent},
    {path:'**',redirectTo:'ticket-list'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
