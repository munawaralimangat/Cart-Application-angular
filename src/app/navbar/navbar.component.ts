import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn:boolean = false;
  userName:string = '';

  constructor(private authService:AuthService) { }

  isMobileMenuOpen = false;

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedInUser()
    this.userName = this.authService.getUserName()
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout():void {
    this.authService.logOut()
    this.isLoggedIn = false
    this.userName = ''
  }

}
