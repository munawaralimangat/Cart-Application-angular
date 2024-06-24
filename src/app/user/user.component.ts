import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private authService:AuthService) { }
  userName:any = ''

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => this.userName = user?.name)
  }

  logout(){
    this.authService.logOut()
  }
  isSidebarOpen = false;
  

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
