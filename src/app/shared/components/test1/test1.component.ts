import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component {
  constructor(private service: AuthService) {}

  handle() {
    this.service.logout();
    console.log('xd');
  }
}
