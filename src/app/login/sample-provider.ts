import { BehaviorSubject } from 'rxjs';
import { LoginProvider, GenericLoginUser } from 'ngx-rim-ionic-login';

export class SampleProvider implements LoginProvider {
    private genericUser: BehaviorSubject<GenericLoginUser> = new BehaviorSubject({
        token: { token: 'token' },
        email: 'email',
        uid: 'uid'
    });

    constructor() { }

    public async isLoggedIn(): Promise<boolean> {
        return new Promise(resolve => resolve(true));
    }

    public async logIn(email: string, password: string): Promise<string> {
        return new Promise(resolve => resolve(null));
    }

    public logOut() { }

    public getUser$() {
        return this.genericUser.asObservable();
    }

    public async resetPasswordRequest(email: string): Promise<string> {
        return new Promise(resolve => resolve(null));
    }

    public getError(error: { code: string; message: string }): string {
        switch (error.code) {
            default:
                return error.message;
        }
    }
}
