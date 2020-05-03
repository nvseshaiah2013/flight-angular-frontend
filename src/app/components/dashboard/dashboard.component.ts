import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { Subscription } from 'rxjs';
import { faChevronCircleRight,faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy,AfterViewInit {
  show:boolean = false; 
  showToast:boolean = false; 
  faChevronCircleRight = faChevronCircleRight;
  faTimesCircle = faTimesCircle;
  isMenuCollapsed:boolean = true;
  constructor(private loader:LoadingService,private toastService:ToastService) { }
  error:any;
  private subscription:Subscription;
  private toastSubscription:Subscription;
  ngOnInit(): void {  
    this.subscription = this.loader.getState().subscribe(status=>{
      this.show = status;
    });
    this.toastSubscription = this.toastService.getState().subscribe(status=>{
      this.showToast = status;
      
      if(this.showToast){
        this.error = this.toastService.getError();
       
      }
    });
  }
  ngAfterViewInit(){
   
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe();
    this.toastSubscription.unsubscribe();
  }

  toggle(){
    this.toastService.hide();
  }
  
  
}
