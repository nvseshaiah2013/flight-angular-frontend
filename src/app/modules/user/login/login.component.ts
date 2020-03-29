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
      username:['',Validators.required],
      password:['',Validators.required]
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
      localStorage.setItem('$F#R%S_ToKeN',data['jwt']);
      this.router.navigate(['/dashboard']);

    },err=>{
      console.log(err);
      console.log('fail');
      this.router.navigate(['/home']);
    })

  }

}
