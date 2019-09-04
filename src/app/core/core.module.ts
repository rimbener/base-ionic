import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './services/auth-interceptor.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BreakPointObserverService } from 'ngx-rim-ionic-menu';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    BreakPointObserverService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule { }
