import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule, NgbDateAdapter, NgbDateNativeAdapter, NgbDateNativeUTCAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { JwtModule } from '@auth0/angular-jwt';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoadingComponent } from './components/loading/loading.component';

export function tokenGetter()
{
  return localStorage.getItem('$F#R%S_ToKeN');
}

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        whitelistedDomains:['localhost:8080'],
        skipWhenExpired:true
      }
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
