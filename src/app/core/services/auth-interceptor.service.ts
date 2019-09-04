import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from 'src/app/login/login.page/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({ setHeaders: { Authorization: 'Bearer ' + this.loginService.getToken() } }))
      .pipe(
        catchError((error, caught) => this.onCatch(error, caught))
      );
  }

  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    return throwError(error);
  }
}
