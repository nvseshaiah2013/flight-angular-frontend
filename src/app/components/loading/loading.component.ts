import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
