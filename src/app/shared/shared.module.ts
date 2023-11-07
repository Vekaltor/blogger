import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [NotFound404Component],
  imports: [CommonModule, FormsModule, PrimengModule],
  exports: [CommonModule, FormsModule, PrimengModule],
})
export class SharedModule {}
