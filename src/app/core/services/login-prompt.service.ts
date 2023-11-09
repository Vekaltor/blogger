import { Injectable, Output } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginPromptService {
  @Output() public showLoginPrompt: boolean = false;
  private isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
    const storedShowLoginPrompt = localStorage.getItem('showLoginPrompt');
    this.showLoginPrompt = storedShowLoginPrompt
      ? JSON.parse(storedShowLoginPrompt)
      : false;
    this.authService.isAuthenticated$.subscribe((value) => {
      this.isAuthenticated = value;
    });
  }

  public handleShowPopup(): void {
    this.showLoginPrompt = true;
    if (!this.isAuthenticated) {
      console.log('xdd');
      localStorage.setItem(
        'showLoginPrompt',
        JSON.stringify(this.showLoginPrompt)
      );
    }
  }

  public handlePopupClosed(): void {
    this.showLoginPrompt = false;
    this.setShowLoginPrompt(this.showLoginPrompt);
  }

  private setShowLoginPrompt(newShowLoginPrompt: boolean): void {
    localStorage.setItem('showLoginPrompt', JSON.stringify(newShowLoginPrompt));
  }
}
