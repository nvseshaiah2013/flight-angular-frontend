import { Component, OnInit } from '@angular/core';
import { faSignInAlt,faPlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  faPlus = faPlus;
  faEllipsisH = faEllipsisH;
  isMenuCollapsed:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
