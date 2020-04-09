import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad{

  constructor(private authService:AuthService,private router:Router) { }
  canLoad():boolean{
    if (this.authService.isAuthenticated())
      return true;
    this.router.navigate(['/user/login']);
    return false;
  }
}
