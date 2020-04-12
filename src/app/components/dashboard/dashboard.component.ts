import { Component, OnInit, OnDestroy } from '@angular/core';
import { Flight } from 'src/app/models/flight.model';
import { FlightService } from 'src/app/modules/flight/flight.service';
import { LoadingService } from 'src/app/services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  show:boolean = false;  
  constructor(private loader:LoadingService) { }

  private subscription:Subscription;
  ngOnInit(): void {  
    this.subscription = this.loader.getState().subscribe(status=>{
      this.show = status;
    })
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }
}
