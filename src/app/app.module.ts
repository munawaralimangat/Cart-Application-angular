import { NgModule } from "@angular/core";
// NgModule is decorator function in Angular that is used to define a module and its metadata
import { BrowserModule } from "@angular/platform-browser";
// BrowserModule is a fundamental module that is required in any Angular application that runs in browser environment,
//It provides essential services and functionalities to launch and run in Angular application in a browser
import { AppRoutingModule } from "./app-routing.module";
//AppRoutingModule is the dedicated module for configuring routing for the application
import { FormsModule } from "@angular/forms";
// FormsModule is the module that provides directives and services for building and managing forms in angular application
import { HttpClientModule } from '@angular/common/http'
// httpClientModule enables the application to communicating with backend services over HTTP requests

import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from "./cart/cart-item/cart-item.component";
import { CartSummaryComponent } from "./cart/cart-summary/cart-summary.component";

//App component is the root component

@NgModule({
    declarations:[
        AppComponent,
        LoginComponent,
        SignupComponent,
        NavbarComponent,
        
        ProductsComponent,
        HomeComponent,
        CartComponent,
        CartItemComponent,
        CartSummaryComponent

    ],
    imports:[BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule { }