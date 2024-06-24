import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";

import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";


const routes:Routes = [
    { path:'', redirectTo: '/home', pathMatch: 'full' },
    {path:'login',loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)},
    {path:'signup',component:SignupComponent},
    {path:'home',component:HomeComponent},
    {path:'about',loadChildren:()=> import('./aboutus/aboutus.module').then(m=> m.AboutusModule)},
    {path:'products',canActivate: [AuthGuard],component:ProductsComponent},
    {path:'cart',canActivate: [AuthGuard],loadChildren:()=> import('./cart/cart.module').then(m=> m.CartModule)}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers: [AuthGuard],
    exports:[RouterModule]
})

export class AppRoutingModule {}