import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { RimIonicMenuModule } from 'ngx-rim-ionic-menu';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RimIonicMenuModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
