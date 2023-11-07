import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [NotFound404Component],
  imports: [CommonModule, PrimengModule],
  exports: [CommonModule, PrimengModule],
})
export class SharedModule {}
