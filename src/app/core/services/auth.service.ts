import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map, tap } from 'rxjs';
import { UserApiService } from './user-api.service';
import { LoginCredentials } from '../models/auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  constructor(private UserApiService: UserApiService, private router: Router) {}

  public login(credentials: LoginCredentials): Observable<boolean> {
    const { email, password, rememberMe } = credentials;

    return this.UserApiService.getMockUsers().pipe(
      delay(3000),
      map((users) => {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          return true;
        } else {
          throw false;
        }
      }),
      tap((isAuthenticated) => this.setAuthenticated(isAuthenticated))
    );
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.setAuthenticated(false);
  }

  private setAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
}
