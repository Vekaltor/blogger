import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './primeng/primeng.module';
import { RedirectToLoginDirective } from './directives/redirect-to-login.directive';
import { LoginPromptService } from '../core/services/login-prompt.service';

@NgModule({
  declarations: [RedirectToLoginDirective],
  imports: [CommonModule, FormsModule, PrimengModule],
  exports: [CommonModule, FormsModule, PrimengModule, RedirectToLoginDirective],
  providers: [LoginPromptService],
})
export class SharedModule {}
