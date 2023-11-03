import {
  Directive,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../core/services/auth.service';

@Directive({
  selector: '[appRedirectToLogin]',
})
export class RedirectToLoginDirective implements OnInit, OnDestroy {
  private isAuthenticated: boolean = false;
  private authSubscription!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  @Input() conditionToRedirect: boolean = true;

  ngOnInit(): void {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => (this.isAuthenticated = isAuthenticated)
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  @HostListener('click') onClick(): void {
    if (!this.isAuthenticated && this.conditionToRedirect) {
      const shouldRedirect = confirm(
        'Musisz być zalogowany. Chcesz przejść do logowania?'
      );

      if (shouldRedirect) {
        this.router.navigate(['/auth/login']);
      }
    } else {
      console.log('Wykonaj akcję dla zalogowanego użytkownika.');
    }
  }
}
