import { Component, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';

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
  @Output() public displaySidebar: boolean = false;
  @Output() public isMobile: boolean = false;
  @Output() public items: Array<NavItem> | undefined;
  @Output() public activeItem: NavItem | undefined;

  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit() {
    this.items = this.menuService.getMenuItems();

    this.activeItem = this.items[0];
    this.checkWindowSize();
  }

  public isActiveLink(link: string): boolean {
    return this.router.isActive(link, true);
  }

  // Dodaj listener na zmiany rozmiaru okna
  @HostListener('window:resize', ['$event'])
  public onResize(event: Event): void {
    this.checkWindowSize();
  }

  public toggleSidebar(): void {
    this.displaySidebar = !this.displaySidebar;
  }

  private checkWindowSize(): void {
    this.isMobile = window.innerWidth < 768;
  }
}
