import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private loader = new BehaviorSubject<boolean>(false);
  private state = this.loader.asObservable();
  error:{message:string;status:string;};
  constructor() { }

  show() {
    this.loader.next(<boolean>true);
  }
  hide() {
    this.loader.next(<boolean>false);
  }

  getState() {
    return this.state;
  }

  getError(){
    return this.error;
  }

  setError(error){
    this.error = error;
  }
}
