import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(
    private authService:AuthService,
    private router:Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {}

  showSuccess(userName:any) {
    this.toastr.success(userName,'Login successfull');
  }

  userName:any = ''

  onSubmit(): void {
    // Handle form submission logic here
    const email = this.email
    const password = this.password
    const loggedIn = this.authService.login(email,password)

    
    if(loggedIn){
      this.router.navigate(['/'])
      this.authService.currentUser$.subscribe(user => this.userName = user?.name)
      this.showSuccess(this.userName)
    }else{
      this.email = '';
      this.password = '';
    }
  }
  
}
