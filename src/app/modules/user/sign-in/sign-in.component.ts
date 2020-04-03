import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { PasswordValidator } from '../password-validator';
import { faCheckCircle, faEyeSlash, faEye ,faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm:FormGroup;
  submitted:boolean = false;
  errors:any;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  error:boolean = false;
  show:boolean = true;
  constructor(private builder:FormBuilder,private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.signInForm = this.builder.group({
      name: ['', [Validators.required, Validators.pattern("([a-zA-Z]+[ ]?)+")]],
      username:['',[Validators.required,Validators.email]],
      password:['',Validators.compose([Validators.required,Validators.minLength(8),
      PasswordValidator.hasNumber,PasswordValidator.hasCapitalLetter,PasswordValidator.hasSmallLetter,PasswordValidator.hasSymbol])],
      age:['',[Validators.required,Validators.pattern("[1-9][0-9]")]],
      confirmPassword:['',Validators.compose([Validators.required])]
    },{validator:PasswordValidator.passwordMatcher});
   
    
  }

  
  signIn():any{
   
    this.submitted = true;
    if(this.signInForm.invalid)
    {
      return;
    }
    // this.signInForm.removeControl('confirmPassword');
    // console.log(this.signInForm.value);
    this.service.addUser(this.signInForm.value).subscribe(data=>{
        console.log(data);
        this.router.navigate(['user','login'])
    },err=>{
      console.log(err);
        this.error = true;
        this.show = true;
        console.error("Failed To Sign Up");
        this.errors = err.error;
    })
  }

  close()
  {
    setTimeout(()=>this.show = false,1500);
  }
}
