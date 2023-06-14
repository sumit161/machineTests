import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable, delay, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private _LoaderService: LoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._LoaderService.isLogInStatus.next(true);
    const headers = req.clone({
      setHeaders :{
        authorization : "httpService",
      }
    });
    return next.handle(headers).pipe(delay(750),finalize(()=>{
      this._LoaderService.isLogInStatus.next(false);
    }))
  }
}
