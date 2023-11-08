import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginPromptService {
  @Output() public showLoginPrompt: boolean = false;

  public handleShowPopup(): void {
    this.showLoginPrompt = true;
  }

  public handlePopupClosed(): void {
    this.showLoginPrompt = false;
  }
}
