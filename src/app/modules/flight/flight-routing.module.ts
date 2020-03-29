import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { PassengerDetailComponent } from './passenger-detail/passenger-detail.component';
import { BookingGaurdService } from './services/booking-gaurd.service';
import { PaymentGuardService } from './services/payment-guard.service';


const routes: Routes = [{
  path:'',component:DashboardComponent,children:[
    {path:'',redirectTo:'search-flight',pathMatch:'full'},
    {path:'search-flight',component:SearchFlightComponent},
    {path:'temp',component:PassengerDetailComponent},
    {path:'payment',component:PaymentComponent,canActivate:[PaymentGuardService]},
    {path:'payment-success',component:PaymentSuccessComponent},
    {path:'view-ticket',component:ViewTicketComponent},
    {path:'passenger-detail',component:PassengerDetailComponent,canActivate:[BookingGaurdService]}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
