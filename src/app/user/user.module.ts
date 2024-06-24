import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';


@NgModule({
  declarations: [
    UserComponent,
    UserSettingsComponent,
    UserOrdersComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
