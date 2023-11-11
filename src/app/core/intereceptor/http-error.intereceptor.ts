import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {
  HttpInterceptor,
  HttpErrorResponse,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
