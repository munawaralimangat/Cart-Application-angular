import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private authService:AuthService,private router:Router,private toastService: ToastService) { }

  ngOnInit(): void {
    console.log('page rendered');
  }

  onSubmit(): void {
    // Handle form submission logic here
    const email = this.email
    const password = this.password
    const loggedIn = this.authService.login(email,password)

    if(loggedIn){
      this.router.navigate(['/'])
    }else{
      this.email = '';
      this.password = '';
    }
  }
}
