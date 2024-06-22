//using guard is angular is a powerful way to control navigation and protect routes based on certain conditions, 
// such as user authentication , user autherization

import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService, private router:Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
        if (this.authService.isLoggedInUser()) {
          return true; // Allow navigation
        } else {
          // Redirect to the login page and save the attempted URL for redirection after login
          return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
          // Alternatively:
          // return false; // Block navigation
        }
    }
}