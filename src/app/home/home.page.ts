import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public CARDS_URL = 'assets/dashboard-cards.json';
  public TOPMENU_URL = 'assets/main-top-menu.json';

  constructor() { }
}
