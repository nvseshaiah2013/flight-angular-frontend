import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {path:'home',component:WelcomeComponent},
  {path:'user',loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)},
  {path:'dashboard',loadChildren:()=>import('./modules/flight/flight.module').then(f=>f.FlightModule),canActivate:[AuthGuardService]},
  {path:'dashboard',loadChildren:()=>import('./modules/ticket/ticket.module').then(t=>t.TicketModule),canActivate:[AuthGuardService]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
