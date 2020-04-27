import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';
import { BookingGaurdService } from './services/booking-gaurd.service';
import { PaymentGuardService } from './services/payment-guard.service';
import { TicketGaurdService } from './services/ticket-gaurd.service';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdatePassengerComponent } from './update-passenger/update-passenger.component';


const routes: Routes = [{
  path:'',component:DashboardComponent,children:[
    {path:'',redirectTo:'search-flight',pathMatch:'full'},
    {path:'search-flight',component:SearchFlightComponent},
    {path:'payment',component:PaymentComponent,canActivate:[PaymentGuardService]},
    {path:'view-ticket',component:ViewTicketComponent,canActivate:[TicketGaurdService]},
    {path:'passenger-detail',component:PassengerDetailComponent,canActivate:[BookingGaurdService]},
    {path:'passenger-list',component:PassengerListComponent},
    {path:'passenger-update',component:UpdatePassengerComponent},
    {path:'user-profile',component:UserProfileComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
