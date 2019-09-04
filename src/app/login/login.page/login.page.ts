import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(loginService: LoginService, router: Router) {
    if (router.url === '/logout') {
      loginService.logOut();
    }
  }
}
