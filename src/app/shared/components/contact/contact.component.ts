import { Component, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Output() public labels = { name: '', email: '', message: '' };

  @ViewChild('loginForm') loginForm!: NgForm;
}
