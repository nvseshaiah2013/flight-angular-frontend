import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/users';
  constructor(private http:HttpClient,private router:Router) { }
  addUser(user:User)
  {
    return this.http.post(this.baseUrl + '/add',user);
  }

  loginUser(username:string,password:string)
  {
    return this.http.post(this.baseUrl + '/authenticate',{"username":username,"password":password});
  }

  logOutUser()
  {
    localStorage.removeItem('$F#R%S_ToKeN');
    this.router.navigate(['/home'])
  }

  

  getUser()
  {
    
    return this.http.post(this.baseUrl + '/getUser',{});
  }

}
