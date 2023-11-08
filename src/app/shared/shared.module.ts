import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './primeng/primeng.module';
import { ContactComponent } from './components/contact/contact.component';
import { LoginPromptComponent } from './components/login-prompt/login-prompt.component';

@NgModule({
  declarations: [NotFound404Component, ContactComponent, LoginPromptComponent],
  imports: [BrowserAnimationsModule, CommonModule, FormsModule, PrimengModule],
  exports: [BrowserAnimationsModule, CommonModule, FormsModule, PrimengModule],
})
export class SharedModule {}
