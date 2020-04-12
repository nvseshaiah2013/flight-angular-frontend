import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor(private auth:AuthService,private router:Router) { }
  canActivate():boolean {    
    if(!this.auth.isAuthenticated())
        {
          return true;
        }
    this.router.navigate(['/dashboard/search-flight']);
    return false;
  }

  
}
