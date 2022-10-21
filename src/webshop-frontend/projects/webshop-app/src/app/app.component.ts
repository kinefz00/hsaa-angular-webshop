import { Component } from '@angular/core';
import { MenuBarItem } from 'projects/shared-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Webshop App';

  public menuItems: MenuBarItem[] = [
    {
      name: 'Produkte',
      routePath: 'products',
    },
    {
      name: 'Impressum',
      routePath: 'impressum',
    },
  ];

  constructor() {}
}
