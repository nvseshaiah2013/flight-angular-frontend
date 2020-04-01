import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm:FormGroup;
  submitted:boolean = false;
  errors:any;
  constructor(private builder:FormBuilder,private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.signInForm = this.builder.group({
      name: ['', [Validators.required, Validators.pattern("([a-zA-Z]+[ ]?)+")]],
      username:['',[Validators.required,Validators.email]],
      password:['',Validators.compose([Validators.required,Validators.minLength(8)])],
      age:['',[Validators.required,Validators.pattern("[1-9][0-9]")]]
    });
    console.log(this.signInForm.controls.password.errors);
  }
  signIn():any{
    this.submitted = true;
    if(this.signInForm.invalid)
    {
      return;
    }
    this.service.addUser(this.signInForm.value).subscribe(data=>{
      console.log("Success");
      console.log(data);
      this.signInForm.reset();
      this.router.navigate(['/user/login']);
    },err=>{
      console.log(err);
        console.error("Failed To Sign Up");
        this.errors = err;
    })
  }
}
