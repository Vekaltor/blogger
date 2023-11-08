import { Component } from '@angular/core';
import { LoginPromptService } from 'src/app/core/services/login-prompt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(public loginPromptService: LoginPromptService) {}
}
