import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AuthGuard } from '../auth.guard';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';

const routes: Routes = [
  {path:'',component:UserComponent,canActivate:[AuthGuard],
    children:[
    {path:'settings',component:UserSettingsComponent},
    {path:'orders',component:UserOrdersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
