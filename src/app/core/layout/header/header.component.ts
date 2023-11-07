import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  public items: Array<NavItem> | undefined;
  public activeItem: NavItem | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        name: 'Home',
        link: '',
        iconClass: 'pi pi-home',
      },
      {
        name: 'Contact',
        link: 'contact',
        iconClass: 'pi pi-eye',
      },
      {
        name: 'About',
        link: 'about',
        iconClass: 'pi pi-id-card',
      },
      {
        name: 'Profile',
        link: 'profile',
        iconClass: 'pi pi-user',
      },
    ];

    this.activeItem = this.items[0];
  }

  isActiveLink(link: string): boolean {
    return this.router.isActive(link, true);
  }
}
