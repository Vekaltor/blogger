import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFound404Component } from './not-found404/not-found404.component';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NotFound404Component],
  imports: [CommonModule, ButtonModule, AppRoutingModule],
})
export class SharedModule {}
