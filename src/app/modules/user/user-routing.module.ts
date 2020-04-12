import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginGuardService } from 'src/app/services/login-guard.service';



const routes: Routes = [{
  path:'',component:AppComponent,children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent,canActivate:[LoginGuardService]},
    {path:'sign-up',component:SignInComponent},
    {path:'**',redirectTo:'login'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
