import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { flyUpDown } from '../../../animations/route.animation';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {
    '[@flyUpDown]': 'true',
    'style': 'display: block;'
  },
  animations: [flyUpDown()]
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted:boolean = false;
  error:boolean = false;
  show:boolean = true;
  errors;
  faEye = faEye;
  faEyeSlash =faEyeSlash;
  temp = faEye;
  pwdshow :boolean = false;
  constructor(private builder:FormBuilder,private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
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
      this.router.navigate(['/dashboard/search-flight']);

    },err=>{
      console.log(err);
      this.errors = err.error;
      this.error = true;
      this.show = true;
    })
  }
      close(){
        setTimeout(()=>this.show = false,1000);
      }
  toggle() {
    return this.pwdshow = !this.pwdshow;
  }
  opener() {
    const pwd = document.getElementsByName('password')[0];
    if (pwd.getAttribute('type') == 'password') {
      pwd.setAttribute('type', 'text');
    }
    else {
      pwd.setAttribute('type', 'password');
    }
    this.toggle() ? this.faEye = this.faEyeSlash : this.faEye = this.temp;
  }
}
