import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, CommonModule, FormsModule, PrimengModule],
  exports: [BrowserAnimationsModule, CommonModule, FormsModule, PrimengModule],
})
export class SharedModule {}
