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
  constructor(public loginPromptService: LoginPromptService) {}
}
