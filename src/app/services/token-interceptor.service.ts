import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(() => { 
      if (localStorage.getItem('$F#R%S_ToKeN') == null){
        {
          this.router.navigate(['user','login']);
        }
        return;
      }
    }));
  }
}
