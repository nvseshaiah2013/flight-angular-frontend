import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService:AuthService,private router:Router) { }

  canActivate():boolean{
    if(this.authService.isAuthenticated())
      return true;
    this.router.navigate(['/user/login']);
    return false;
  }
}
