import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Users from 'src/mocks/users.mock';
import FakeUser from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  public getMockUsers(): Observable<Array<FakeUser>> {
    return of(Users);
  }
}
