import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";

import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";


const routes:Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'login',loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)},
    {path:'signup',loadChildren:()=> import('./signup/signup.module').then(m=>m.SignupModule)},
    {path:'about',loadChildren:()=> import('./aboutus/aboutus.module').then(m=> m.AboutusModule)},
    {path:'products',canActivate: [AuthGuard],loadChildren:()=> import('./products/products.module').then(m=>m.ProductsModule)},
    {path:'cart',canActivate: [AuthGuard],loadChildren:()=> import('./cart/cart.module').then(m=> m.CartModule)},
    {path:'user',canActivate:[AuthGuard],loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
    {path:'test',component:TestComponent}
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers: [AuthGuard],
    exports:[RouterModule]
})

export class AppRoutingModule {}