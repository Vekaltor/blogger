import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class GlobalNotificationsHandler {
  constructor(private messageService: MessageService) {}

  public showSuccess(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Sukces',
      detail: message,
    });
  }

  public showInfo(message: string): void {
    this.messageService.add({
      severity: 'info',
      summary: 'Informacja',
      detail: message,
    });
  }

  public showWarn(message: string): void {
    this.messageService.add({
      severity: 'warn',
      summary: 'Ostrzeżenie',
      detail: message,
    });
  }

  public showError(message: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Błąd',
      detail: message,
    });
  }
}
