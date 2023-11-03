import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable, inject } from '@angular/core';
import FakeUser from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentUser: FakeUser = JSON.parse(
      route.queryParamMap.get('currentUser')!
    );

    if (currentUser) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}

export const IsLoggedGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => inject(AuthGuard).canActivate(route, state);
