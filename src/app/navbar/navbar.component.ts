import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean = false;
  userName: any = '';
  private authStatusSub: Subscription = Subscription.EMPTY;
  private userNameSub: Subscription = Subscription.EMPTY;

  isMobileMenuOpen = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authStatusSub = this.authService.isLoggedIn$.subscribe((status: boolean) => {
      this.isLoggedIn = status;
    });

    this.authService.currentUser$.subscribe(user =>{
      this.userName = user?.name
    })
  }

  ngOnDestroy(): void {
    this.authStatusSub.unsubscribe();
    this.userNameSub.unsubscribe();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout(): void {
    this.authService.logOut();
  }
}
