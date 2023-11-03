import { Component, OnInit } from '@angular/core';

interface NavItem {
  name: string;
  link: string;
  iconClass: string;
}

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  items: Array<NavItem> | undefined;
  activeItem: NavItem | undefined;

  ngOnInit() {
    this.items = [
      {
        name: 'Home',
        link: '',
        iconClass: 'pi pi-home',
      },
      {
        name: 'login',
        link: 'auth/login',
        iconClass: 'pi pi-user',
      },
      {
        name: 'register',
        link: 'auth/register',
        iconClass: 'pi pi-sign-in',
      },
    ];

    this.activeItem = this.items[0];
  }
}