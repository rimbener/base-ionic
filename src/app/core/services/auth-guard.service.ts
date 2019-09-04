import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';

import { LoginService } from '../../login/login.page/login.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private router: Router, private loginService: LoginService) { }

  public async canLoad(route: Route): Promise<boolean> {
    if (!(await this.loginService.isLoggedIn())) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: route.path } });
      return false;
    }
    return true;
  }

  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      if (!(await this.loginService.isLoggedIn())) {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
      return true;
    } catch (e) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
