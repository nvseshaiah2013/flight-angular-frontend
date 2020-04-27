import { Injectable } from '@angular/core';
import { Passenger } from 'src/app/models/passenger.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  private baseUrl = 'http://localhost:8080/passengers/';
  constructor(private http:HttpClient,private router:Router) { }

  savePassenger(passenger:Passenger)
  {
    return this.http.post(this.baseUrl,passenger);
  }

  editPassenger(passenger:Passenger){
    return this.http.put(this.baseUrl +'update',passenger);
  }

  deletePassenger(id:number){
    return this.http.delete(this.baseUrl + `delete/${id}`);
  }
  
  getPassengers(){
    return this.http.get<Passenger[]>(this.baseUrl);
  }

  reload(){
      // this.router.navigate(['dashboard','search-flight']);
      this.router.navigate(['dashboard','passenger-list']);
  }
}
