import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

// const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private helper:JwtHelperService) { }

  public isAuthenticated():boolean{
    const token = localStorage.getItem('$F#R%S_ToKeN');
    return !this.helper.isTokenExpired(token);
  }
}
