import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted:boolean = false;
  constructor(private builder:FormBuilder,private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username:[''],
      password:['']
    })
  }
  login():any{
    this.submitted = true;
    if(this.loginForm.invalid)
    {
      return;
    }
    this.service.loginUser(this.loginForm.controls.username.value,this.loginForm.controls.password.value)
    .subscribe(data=>{
      console.log(data);
      console.log('success');
      this.router.navigate(['/dashboard']);

    },err=>{
      console.log(err);
      console.log('fail');
      this.router.navigate(['/home']);
    })

  }

}
