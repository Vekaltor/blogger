import {
  Directive,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { LoginPromptService } from '../../core/services/login-prompt.service';

@Directive({
  selector: '[appRedirectToLogin]',
})
export class RedirectToLoginDirective implements OnInit, OnDestroy {
  private isAuthenticated: boolean = false;
  private authSubscription!: Subscription;

  constructor(
    private authService: AuthService,
    private loginPromptService: LoginPromptService
  ) {}

  @Input() conditionToRedirect: boolean = true;

  ngOnInit(): void {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => (this.isAuthenticated = isAuthenticated)
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.loginPromptService.handlePopupClosed();
  }

  @HostListener('click') public onClick(): void {
    if (!this.isAuthenticated && this.conditionToRedirect) {
      this.loginPromptService.handleShowPopup();
    }
  }
}
