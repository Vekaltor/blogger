import { Component, Input } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  @Input()
  public message!: Message[];

  constructor() {}
}
