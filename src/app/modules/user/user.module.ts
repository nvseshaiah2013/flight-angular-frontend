import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [LoginComponent, SignInComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ]
})
export class UserModule { }
