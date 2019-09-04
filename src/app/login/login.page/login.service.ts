import { Injectable } from '@angular/core';
import { UserPasswordLoginService } from 'ngx-rim-ionic-login';
import { SampleProvider } from '../sample-provider';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private userPasswordService: UserPasswordLoginService) {
    this.userPasswordService.init(new SampleProvider());
  }

  public getToken() {
    return this.userPasswordService.getToken('tokenName');
  }

  public async isLoggedIn() {
    return await this.userPasswordService.isLoggedIn();
  }

  public logOut() {
    this.userPasswordService.logOut();
  }
}
