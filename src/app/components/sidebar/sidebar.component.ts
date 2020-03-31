import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';
import { faGlobeAsia } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUser:any;
  faGlobeAsia = faGlobeAsia;

  constructor(private service:UserService) {
    this.getUser();
   }

  ngOnInit(): void {
      
  }
  getUser()
  {
    this.service.getUser().subscribe(data => {
      console.log(data);
      this.currentUser = data;
    }, err => console.log(err));
  }
}
