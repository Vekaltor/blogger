import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { LoginCredentials } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public labels = { email: '', password: '', rememberMe: false };

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private authService: AuthService, private router: Router) {}

  public handleSubmit(e: Event) {
    e.preventDefault();
    const formControls: LoginCredentials = this.loginForm.value;

    if (this.loginForm.submitted && this.loginForm.valid)
      this.authService.login(formControls).subscribe({
        next: () => void this.router.navigate(['/']),
        error: (err) => {
          throw err;
        },
      });
  }
}
