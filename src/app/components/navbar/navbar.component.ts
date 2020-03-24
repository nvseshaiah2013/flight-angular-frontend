import { Component, OnInit } from '@angular/core';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed:boolean = true;
  faEllipsisH = faEllipsisH;
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
