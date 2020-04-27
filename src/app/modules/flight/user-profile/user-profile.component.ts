import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user/user.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(private userService:UserService) { }
  user:User;
  ngOnInit() {
    this.userService.getUser().subscribe(data=>this.user=data,err=>{
      
    })
  }

}
