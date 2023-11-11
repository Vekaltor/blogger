import { ErrorHandler, Injectable } from '@angular/core';
import { GlobalNotificationsHandler } from './global-notifications-handler';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private notificationHandler: GlobalNotificationsHandler) {}

  public handleError(error: any): void {
    console.error('Błąd:', error);

    if (error.status && error.error && error.error.message) {
      this.notificationHandler.showError(`Błąd API: ${error.error.message}`);
    } else {
      this.notificationHandler.showError(
        'Wystąpił błąd. Spróbuj ponownie później.'
      );
    }
  }
}
