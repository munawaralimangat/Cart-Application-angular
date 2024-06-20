import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HomeComponent } from "./home/home.component";
// import { AboutusComponent } from "./aboutus/aboutus.component";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { AboutusModule } from "./aboutus/aboutus.module";

const routes:Routes = [
    { path:'', redirectTo: '/home', pathMatch: 'full' },
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'home',component:HomeComponent},
    {path:'about',loadChildren:()=> import('./aboutus/aboutus.module').then(m=> AboutusModule)},
    {path:'products',component:ProductsComponent},
    {path:'cart',component:CartComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}