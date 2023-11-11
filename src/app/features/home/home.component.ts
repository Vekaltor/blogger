import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { GlobalErrorHandler } from 'src/app/core/errors/global-error-handler';
import { LoginPromptService } from 'src/app/core/services/login-prompt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    public loginPromptService: LoginPromptService,
    private http: HttpClient,
    private errorHandler: GlobalErrorHandler
  ) {}

  public click() {
    console.log('xd');
    this.http
      .get('https://example.com/api/data')
      .pipe(
        catchError((error) => {
          this.errorHandler.handleError(error);

          return throwError((error: HttpErrorResponse) => error);
        })
      )
      .subscribe(
        (data) => {
          console.log('Dane:', data);
        },
        (error) => {
          // Obsługa błędu
          console.error('Błąd:', error);
        }
      );
  }
}
