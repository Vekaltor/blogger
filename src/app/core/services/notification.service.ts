import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private messageSubject = new BehaviorSubject<Message[]>([]);
  public messages$: Observable<Message[]> = this.messageSubject.asObservable();

  public updateMessages(messages: Message[]): void {
    this.messageSubject.next(messages);
  }
}
