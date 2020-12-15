import { Component } from '@angular/core';

import { MENU_ITEMS, ADMIN_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

// TODO add if here for role check, inject user service
  menu = ADMIN_ITEMS;
}
