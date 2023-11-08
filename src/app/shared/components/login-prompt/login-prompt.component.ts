import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPromptService } from 'src/app/core/services/login-prompt.service';

@Component({
  selector: 'app-login-prompt',
  templateUrl: './login-prompt.component.html',
  styleUrls: ['./login-prompt.component.css'],
})
export class LoginPromptComponent {
  constructor(
    private router: Router,
    protected loginPromptService: LoginPromptService
  ) {}

  @Output() protected goToLogin() {
    this.router.navigate(['/auth/login']);
    this.closePrompt();
  }

  @Output() protected closePrompt() {
    this.loginPromptService.handlePopupClosed();
  }
}
