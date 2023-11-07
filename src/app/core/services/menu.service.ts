import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public getMenuItems() {
    return [
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
  }
}
