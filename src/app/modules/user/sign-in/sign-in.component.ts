import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm:FormGroup;
  submitted:boolean = false;
  constructor(private builder:FormBuilder,private service:UserService) { }

  ngOnInit(): void {
    this.signInForm = this.builder.group({
      name:['',[Validators.required,Validators.pattern("(([A-Za-z]+)[a-z ])+")]],
      username:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern("[a-z0-9A-z!@#$%^&*()]{8,}")]],
      age:['',[Validators.required,Validators.pattern("[1-9][0-9]")]]
    });
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
    },err=>{
      console.log(err.stack);
        console.log("Success1");

    })
  }
}
