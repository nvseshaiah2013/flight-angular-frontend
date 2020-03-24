import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted:boolean = false;
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username:[''],
      password:['']
    })
  }
  login():any{
    this.submitted = true;
  }

}
