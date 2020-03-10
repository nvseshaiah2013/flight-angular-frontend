import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm:FormGroup;
  submitted:boolean = false;
  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.builder.group({
      name:['',[Validators.required,Validators.pattern("(([A-Za-z]+)[a-z ])+")]],
      username:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("[a-z0-9A-z!@#$%^&*()]{8,}")]],
      age:['',[Validators.required,Validators.pattern("[1-9][0-9]")]]
    });
  }
  signIn():any{
    this.submitted = false;
  }
}
